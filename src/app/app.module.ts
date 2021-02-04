import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { SharedModule } from './shared/shared.module';
// DEFINICION DE LOS COMPONENTES PROPIOS 
import { ContactComponent } from './modules/contact/components/contact.component';
import { LayoutComponent } from './layout/layout.component'


// DEFINICION DE LOS SERVICIOS



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
