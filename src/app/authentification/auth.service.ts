import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:3001/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
 
  currentUser: User | null = null;

  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/users/register`;
    console.log('API URL:', api); 
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  signIn(user: User) {
    return this.http.post<any>(`${this.endpoint}/users/login`, user).subscribe({
      next: (res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('refresh_token', res.refreshToken);
        localStorage.setItem('email', user.email); 
        this.router.navigate(['menu/products']);
      },
      error: (e: any) => {
        console.log(e);
        alert("Error !");
      }
    });
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null;
  }

  clearUserEmail(): void {
    localStorage.removeItem('email');
  }

  doLogout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email');
    this.currentUser = null; // Ajouter cette ligne pour effacer les informations de l'utilisateur
    this.router.navigate(['ecommerce']);
  }

  getUserEmail(): string | null {
    return localStorage.getItem('email');
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  refreshToken(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(`${this.endpoint}/users/refreshToken/`, {
      refreshToken: token
    }, httpOptions);
  }

  isLoggedInn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
  clearUser(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('email');
    this.currentUser = null; 
    this.router.navigate(['log-in']);
  }
  getUserInfo(): User | null {
    return this.currentUser;
  }

}
