import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutbookComponent } from './components/aboutbook/aboutbook.component';
import { PromoteComponent } from './components/promote/promote.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component'
import { UserComponent } from './components/user/user.component';
const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'addbook', component: AddBookComponent },
  { path: 'publisherform', component: PublisherFormComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "aboutbook", component: AboutbookComponent },
  { path: 'promote', component: PromoteComponent },
  { path: "shoppingcart", component: CartComponent },
  { path: "addbook", component: AddBookComponent },
  { path: "payment", component: PaymentComponent },
  { path: "user", component: UserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
