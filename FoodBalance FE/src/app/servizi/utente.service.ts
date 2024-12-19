/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private url: string = 'http://localhost:8080'; // URL del backend

  constructor(private http: HttpClient) {}

  loginUtente(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.url + '/login', credentials);
  }


  saveUtente(utente: any): Observable<any> {
    return this.http.post(this.url + '/saveUtente', utente);
  }
  

  logoutUtente(): void {
    // Verifica se localStorage è disponibile
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('authToken');
    }
  }

  isLoggedIn(): boolean {
    // Controlla se localStorage è disponibile e se il token esiste
    if (this.isLocalStorageAvailable()) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      return typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }
}*/

import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private url: string="http://localhost:8080";

  constructor(private authService: AuthService,private http: HttpClient ) {}

  /*  loginUtente(utenteLogin: {}) {
    return this.http.post(this.url+"/login", utenteLogin);
    if (utenteLogin.email === 'fra@gmail.com' && utenteLogin.password === 'fra') { // Usa 'password' invece di 'password_utente'
      this.authService.setAuthenticationStatus(true);
      return of({
        esito_operazione: 'success',
        token: 'mock-token-1234'
      });
    } else {
      throw new Error('Credenziali non valide'); // Genera un errore in caso di credenziali errate
    }
  }*/

  loginUtente(utenteLogin: any): Observable<any> {
    return this.http.post(this.url + "/login", utenteLogin).pipe(
      map((data: any) => {
        if (data > 0) {
          this.authService.setAuthenticationStatus(true);
          this.saveToken(data);
          return true;
        } else {
          return false;
        }
      }),
      catchError((error: any) => {
        console.error("Errore durante il login:", error);
        return throwError(() => new Error("Errore durante il login"));
      })
    );}


    saveToken(token: number): void {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('authToken', token.toString()); // Salva il token nel localStorage solo se siamo nel client
      }
    }


    getToken(): number{
      return Number(localStorage.getItem('authToken'));
    }


  saveUtente(utente: {} ){
    return this.http.post(this.url +"/saveUtente", utente);
  }

  getUtente(user_id: number){
    return this.http.get(this.url+ "/getUtente/"+user_id.toString());
  }

  logoutUtente(): void {
    // Verifica se localStorage è disponibile
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('authToken');
    }
    this.authService.setAuthenticationStatus(false); // Imposta non autenticato

  }

  isLoggedIn(): boolean {
    // Controlla se localStorage è disponibile e se il token esiste
    if (this.isLocalStorageAvailable()) {
      return !!localStorage.getItem('authToken');
    }
    return false;
  }
  private isLocalStorageAvailable(): boolean {
    try {
      return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
    } catch (e) {
      return false;
    }
  }
  updateUtenteDati(utente: {}){
    return this.http.put(this.url+ "/updateUtenteDati",utente);
  }

  updateUtenteDatiAccount(utente: {}){
    return this.http.put(this.url+ "/updateUtenteDatiAccount",utente);
  }
}








