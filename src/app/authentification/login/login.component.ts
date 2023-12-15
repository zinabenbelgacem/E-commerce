import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) {}

  email: string = '';
  password: string = '';
  _id: object = {}; 
  firstname: string = '';
  lastname: string = '';
  role: string = '';
  avatar:string;
  isActive:boolean;

  loginUser() {
    const userlogin = {
      _id: this._id,
      email: this.email,
      password: this.password,
      role: this.role,
      firstname: this.firstname,
      lastname: this.lastname,
      avatar:this.avatar,
      isActive:this.isActive,
    };

    
this.authService.signIn(userlogin);

  }
}
