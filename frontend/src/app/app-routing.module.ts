import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutbookComponent } from './components/aboutbook/aboutbook.component';
import { PromoteComponent } from './components/promote/promote.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InfoComponent } from './components/info/info.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CategoryComponent } from './components/category/category.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'addbook', component: AddBookComponent },
  { path: 'publisherform', component: PublisherFormComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'aboutbook', component: AboutbookComponent },
  { path: 'promote', component: PromoteComponent },
  { path: 'shoppingcart', component: CartComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info',
      },
      { path: 'info', component: InfoComponent },
      { path: 'editProfile', component: EditProfileComponent },
    ],
  },
  { path: 'addbook', component: AddBookComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'user', component: UserComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'selectedcategory', component: SelectedCategoryComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'placeorder', component: PlaceorderComponent },
  { path: 'editbook', component: EditFormComponent },
  { path: 'search', component: SearchComponent },
  { path: 'editbook', component: EditFormComponent },
  { path: 'report', component: ReportComponent },
  { path: 'app', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
