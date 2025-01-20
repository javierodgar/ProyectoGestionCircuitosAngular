import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CircuitosComponent } from './main-page/circuitos/circuitos.component';
import { GestionPersonalComponent } from './main-page/gestion-personal/gestion-personal.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'main/:usuario',
        component: MainPageComponent,
        children:[
            {
                path: 'gestion-personal/:usuario2',
                component: GestionPersonalComponent
            },
            {
                path: 'circuitos',
                component: CircuitosComponent
            }
        ]
    },
    {
        path: 'error',
        component: ErrorPageComponent
    },
    {
        path: '**',
        redirectTo: 'error',
    }
];
