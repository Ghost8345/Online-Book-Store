import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { PublisherFormComponent } from './components/publisher-form/publisher-form.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AboutbookComponent } from './components/aboutbook/aboutbook.component';
import { PromoteComponent } from './promote/promote.component';


const routes: Routes = [
  {path: '',   redirectTo: 'registration', pathMatch: 'full' }, // redirect to `first-component`
  {path:'addbook', component:AddBookComponent},
  {path:'publisherform', component:PublisherFormComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"aboutbook",component:AboutbookComponent},
  {path:'promote', component:PromoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
