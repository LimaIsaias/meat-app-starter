import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router/src';

export const ROUTES: Routes[
    { path: '', component: HomeComponent } ,
    { path: 'about', component: AboutComponent }
    ]