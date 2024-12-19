import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UtenteService } from './servizi/utente.service';
import { AuthService } from './servizi/AuthService';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'FoodBalance';
  isAuthenticated = false; // Stato di autenticazione

  constructor(private router: Router,  private utenteService: UtenteService,private authService: AuthService,private dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.checkAuthentication();
    
   

    this.authService.isAuthenticated$.subscribe((status) => {
      this.isAuthenticated = status;
    });
  
    this.router.events.subscribe(() => {
      const activeRoute = this.router.url;
      if (activeRoute === '/') this.selectedIndex = 0;
      else if (activeRoute === 'foodcomposition') 
        {this.selectedIndex = 1;}
      else if (activeRoute === 'riepilogo')
        { this.selectedIndex = 2;}
      else if (activeRoute === 'areapersonale') 
        {this.selectedIndex = 3;}
    });

  }

  // Controlla se l'utente è autenticato
  checkAuthentication(): void {
    this.isAuthenticated = this.utenteService.isLoggedIn();
  }


  //Esegue il logout
  logout(): void {
    this.utenteService.logoutUtente();
    this.isAuthenticated = false;
    this.router.navigate(['/']); // Reindirizza al menù principale
  }

  

  selectedIndex = 0;

 
  onTabChange(event: any): void {
    const selectedTabIndex = event.index;
  
   if (selectedTabIndex === 0) {
      this.router.navigate(['/areapersonale']);
    } else if (selectedTabIndex === 1) {
      this.router.navigate(['/foodcomposition']);
    } else if (selectedTabIndex === 2) {
      this.router.navigate(['/riepilogo']);
    }
  }
  openLoginDialog(): void {
    const dialogAperto=this.dialog.open(LoginDialogComponent, {width:'370px', height:'450px', data:{login:true}});

  }

  openRegistrazioneDialog():void{
    const dialogAperto=this.dialog.open(LoginDialogComponent, {width:'410px', height:'600px', data:{login:false}});

  }


  
}
