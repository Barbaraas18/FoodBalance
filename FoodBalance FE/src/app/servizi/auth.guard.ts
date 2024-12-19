import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  
    //Verifica se l'utente è autenticato
    if (typeof window !== 'undefined' && window.localStorage){
      const token = localStorage.getItem('authToken');
      if (token) {
        // L'utente è autenticato, quindi può accedere alla rotta
        //this.router.navigate(['/areapersonale']);
        return true;
      } else {
        // Se non autenticato, reindirizza alla pagina di menu principale
        this.router.navigate(['/']);
        return false;
      }
    }
    // Se non possiamo accedere a localStorage, impediamo l'accesso
    return false;


     
  }



  
}
