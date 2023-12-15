// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userEmail: string | null = null;

  isConnected: boolean = true; 
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
    this.isConnected = this.authService.isLoggedIn;
  }

  onLogout(): void {
    this.authService.clearUserEmail();
    this.authService.clearUser(); 
    this.isConnected = false;
    this.authService.doLogout();
  }
}
