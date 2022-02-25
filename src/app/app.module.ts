import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module'
import { DoctorModule } from './modules/doctor/doctor.module'
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  //^QUI IMPORTO TUTTI I MODULI CHE MI SERVONO.
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DoctorModule,
    UserModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
