import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2 implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
 //Verifica se l'utente è autenticato
 if (typeof window !== 'undefined' && window.localStorage){
    const token = localStorage.getItem('authToken');
    if (token) {
      // L'utente è autenticato, quindi può accedere alla rotta
      return false;
    } else {
      // Se non autenticato, reindirizza alla pagina di menu principale
      
      return true;
    }
  }
  // Se non possiamo accedere a localStorage, impediamo l'accesso
  return false;
}
}