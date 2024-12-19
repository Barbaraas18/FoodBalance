import { Component, Inject, OnInit, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { UtenteService } from '../servizi/utente.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent implements OnInit{
  formLogin!: FormGroup;
  formRegistrazione!: FormGroup;
  hide:boolean=true;
  warning:string="";
  user_id:number=0;

  constructor(private dialogAperto: MatDialogRef<LoginDialogComponent>, private utenteService: UtenteService, private router: Router, private cdr: ChangeDetectorRef,@Inject(MAT_DIALOG_DATA) public data:{login:boolean}){ }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email:new FormControl(null),
      password_utente: new FormControl(null)
    });
  
  
    this.formRegistrazione =new FormGroup({
      username: new FormControl(null),
      email:new FormControl(null),
      password_utente: new FormControl(null),
      eta: new FormControl(null),
      sesso: new FormControl(null),
      altezza: new FormControl(null),
      peso: new FormControl(null),
      attivita: new FormControl(null)
    });
  }

  Login(){
    this.dialogAperto.updateSize('370px','450px');
    this.warning="";
    this.data.login=true;
  }

  Registrati(){
    this.dialogAperto.updateSize('410px','600px');
    this.warning="";
    this.data.login=false;
  }

  annulla(){
    this.dialogAperto.close();
  }

  accedi(){
    this.formLogin.get("email")?.addValidators([Validators.required, Validators.email]);
    this.formLogin.get("email")?.updateValueAndValidity();
    this.formLogin.get("password_utente")?.addValidators(Validators.required);
    this.formLogin.get("password_utente")?.updateValueAndValidity();

    



     // Aggiungi i controlli di validità

     if (this.formLogin.valid) {
      this.utenteService.loginUtente(this.formLogin.value).subscribe({
        next: (response) => {
          if(response==true){
            this.router.navigate(['/areapersonale']);
            this.dialogAperto.close();
          }
          else{
            this.warning="Credenziali non valide, email o password errate";
          }
          
        },
        error: (err) => {
          this.warning="Errore del server: riprova più tardi!";
        }
      });
    }
    else{
      this.warning="Riempi tutti i campi";
    }
    

  }
  


  registrati(){
    this.formRegistrazione.get("username")?.addValidators(Validators.required);
    this.formRegistrazione.get("username")?.updateValueAndValidity();
    this.formRegistrazione.get("email")?.addValidators([Validators.required,Validators.email]);
    this.formRegistrazione.get("email")?.updateValueAndValidity();
    this.formRegistrazione.get("password_utente")?.addValidators(Validators.required);
    this.formRegistrazione.get("password_utente")?.updateValueAndValidity();
    this.formRegistrazione.get("eta")?.addValidators([Validators.required,Validators.pattern('^[0-9]+$')]);
    this.formRegistrazione.get("eta")?.updateValueAndValidity();
    this.formRegistrazione.get("sesso")?.addValidators(Validators.required);
    this.formRegistrazione.get("sesso")?.updateValueAndValidity();
    this.formRegistrazione.get("altezza")?.addValidators([Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]);
    this.formRegistrazione.get("altezza")?.updateValueAndValidity();
    this.formRegistrazione.get("peso")?.addValidators([Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]);
    this.formRegistrazione.get("peso")?.updateValueAndValidity();
    this.formRegistrazione.get("attivita")?.addValidators(Validators.required);
    this.formRegistrazione.get("attivita")?.updateValueAndValidity();

    if (this.formRegistrazione.valid){
      this.utenteService.saveUtente(this.formRegistrazione.value).subscribe({
        next:(data: any)=>{
          this.user_id=data["user_id"];
          this.dialogAperto.close();
        },
        error:(errore:any)=>{this.warning="Errore del server: riprova più tardi!"}});

    }
    else{
      this.warning="riempi tutti i campi";
    }
  }

}