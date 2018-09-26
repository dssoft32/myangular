import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalHttpService } from './services/http.service';
import { userService } from './services/users.service';


import { UsersComponent } from './users/users.component';
import { UserfullviewComponent } from './users/userfullview/userfullview.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserfullviewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalHttpService,userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
