import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot([{path:'',redirectTo:'registration',pathMatch:'full'},{path:"registration",component:RegistrationComponent},{path:"registeduser",component:UserComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
