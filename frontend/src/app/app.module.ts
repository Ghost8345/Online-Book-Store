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
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PromoteComponent } from './components/promote/promote.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    PublisherFormComponent,
    RegistrationComponent,
    UserComponent,
    AddBookComponent,
    AboutbookComponent,
    CartComponent,
    PaymentComponent,
    PromoteComponent,
    EditFormComponent
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
