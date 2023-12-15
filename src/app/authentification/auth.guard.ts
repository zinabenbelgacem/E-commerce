import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Utilisez 'isLoggedIn' au lieu de 'getisLoggedIn'
  if (authService.isLoggedIn !== true) {
    window.alert('Accès non autorisé !');
    router.navigate(['login']);
  }
  return true;
};
