import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import { MenuPrincipaleComponent } from './menu-principale/menu-principale.component';
import { FoodcompositionComponent } from './foodcomposition/foodcomposition.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AreapersonaleComponent } from './areapersonale/areapersonale.component';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';
import { MatCardModule } from '@angular/material/card';
import { SommarioProfiloComponent } from './areapersonale/sommario-profilo/sommario-profilo.component';
import { FormAggiornaDatiAccountComponent } from './areapersonale/form-aggiorna-dati-account/form-aggiorna-dati-account.component';
import { FormAggiornaDatiComponent } from './areapersonale/form-aggiorna-dati/form-aggiorna-dati.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficoCalorieComponent } from './riepilogo/grafico-calorie/grafico-calorie.component';
import { GraficoMacronutrientiComponent } from './riepilogo/grafico-macronutrienti/grafico-macronutrienti.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipaleComponent,
    FoodcompositionComponent,
    LoginDialogComponent,
    AreapersonaleComponent,
    RiepilogoComponent,
    SommarioProfiloComponent,
    FormAggiornaDatiAccountComponent,
    FormAggiornaDatiComponent,
    GraficoCalorieComponent,
    GraficoMacronutrientiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    NgApexchartsModule,
    MatAutocompleteModule , 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

