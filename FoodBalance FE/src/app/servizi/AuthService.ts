import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  constructor() {
    // Carica lo stato di autenticazione dal localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';    
        this.isAuthenticatedSubject.next(isAuthenticated);
    }
  
  }

  // Metodo per ottenere lo stato dell'autenticazione come Observable
  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  // Metodo per cambiare lo stato dell'autenticazione
  setAuthenticationStatus(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('isAuthenticated', isAuthenticated.toString());
      }
    // Salva lo stato nel localStorage
    
  }
}
