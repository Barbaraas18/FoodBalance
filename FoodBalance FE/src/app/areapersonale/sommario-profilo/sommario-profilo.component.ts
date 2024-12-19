import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sommario-profilo',
    templateUrl: './sommario-profilo.component.html',
    styleUrl: './sommario-profilo.component.css',
    standalone: false
})
export class SommarioProfiloComponent {
  @Input() utente:any;

} 
