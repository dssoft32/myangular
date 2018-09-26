import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserfullviewComponent } from './users/userfullview/userfullview.component';

const routes: Routes = [
 // { path: '', redirectTo: 'phone', pathMatch: 'full', data: { state: 'phone' }},
  { path: '', component: UsersComponent, data: { state: '' }},
  { path: 'users', component: UsersComponent, data: { state: '' }},
  { path: 'users/:username', component: UserfullviewComponent, data: { state: '' }},

 // { path: '**', component: NotFound }
];


export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: false
});
