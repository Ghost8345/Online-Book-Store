import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';

const routes: Routes = [
  {path:'addbook', component:AddBookComponent},
  {path:'publisherform', component:PublisherFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
