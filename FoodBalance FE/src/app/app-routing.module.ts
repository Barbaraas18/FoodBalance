import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipaleComponent} from './menu-principale/menu-principale.component';
import { FoodcompositionComponent } from './foodcomposition/foodcomposition.component';
import { AreapersonaleComponent } from './areapersonale/areapersonale.component';
import { AuthGuard } from './servizi/auth.guard';
import { RiepilogoComponent } from './riepilogo/riepilogo.component';
import { AuthGuard2 } from './servizi/authguard2';

const routes: Routes = [
  {path: '', component: MenuPrincipaleComponent, canActivate: [AuthGuard2]},
  {path: 'foodcomposition', component: FoodcompositionComponent, canActivate: [AuthGuard]},
  {path: 'riepilogo', component: RiepilogoComponent, canActivate: [AuthGuard]},
  {path: 'areapersonale', component: AreapersonaleComponent, canActivate: [AuthGuard]}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
