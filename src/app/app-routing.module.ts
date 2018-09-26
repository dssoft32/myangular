import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 // { path: '', redirectTo: 'phone', pathMatch: 'full', data: { state: 'phone' }},
  { path: '', component: SplashComponent, data: { state: '' }},
  { path: 'users', component: SplashComponent, data: { state: '' }},
  { path: 'users/:username', component: SplashComponent, data: { state: '' }},

 // { path: '**', component: NotFound }
];


export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: false
});
