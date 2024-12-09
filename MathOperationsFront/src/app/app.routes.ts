import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CalculadoraComponent } from './Components/calculadora/calculadora.component';
import { AuthGuard } from './auth.guard'; 

export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { 
    path: 'calculadora', 
    component: CalculadoraComponent, 
    canActivate: [AuthGuard] 
  }
];