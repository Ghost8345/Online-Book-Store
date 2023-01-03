import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { AboutbookComponent } from './components/aboutbook/aboutbook.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PromoteComponent } from './components/promote/promote.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    PublisherFormComponent,
    RegistrationComponent,
    UserComponent,
    AddBookComponent,
    LoginComponent,
    AboutbookComponent,
    CartComponent,
    PaymentComponent,
    PromoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
