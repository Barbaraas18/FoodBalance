import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-menu-principale',
  templateUrl: './menu-principale.component.html',
  styleUrls: ['./menu-principale.component.css']
})
export class MenuPrincipaleComponent {
  constructor(
    private dialog: MatDialog,
  ) {}

  
 //Apre la finestra di dialogo per il login.
  
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '370px',
      height: '450px',
      data:{login:true}
    });
  }
}

