import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutbookComponent } from './aboutbook/aboutbook.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot([{path:'',redirectTo:'registration',pathMatch:'full'},{path:"registration",component:RegistrationComponent},{path:"registeduser",component:UserComponent},{path:"aboutbook",component:AboutbookComponent}]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
