import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './compornent/books/books.component';
import { SignInComponent } from './compornent/sign-in/sign-in.component';
import { SignUpComponent } from './compornent/sign-up/sign-up.component';
import { DashboardComponent } from './compornent/dashboard/dashboard.component';
import { AddBookComponent } from './compornent/add-book/add-book.component';


const routes: Routes = [
  {path: '',redirectTo: '/books', pathMatch: 'full'},
  {path:'books', component: BooksComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'sign-in', component : SignInComponent},
  {path: 'sign-up', component : SignUpComponent},
  {path : 'dashbord', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
