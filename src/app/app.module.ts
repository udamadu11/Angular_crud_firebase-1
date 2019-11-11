import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './compornent/books/books.component';

import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';

import { AddBookComponent } from './compornent/add-book/add-book.component';
import {FormsModule } from '@angular/forms';
import { HeaderComponent } from './compornent/header/header.component';
import { SignInComponent } from './compornent/sign-in/sign-in.component';
import { SignUpComponent } from './compornent/sign-up/sign-up.component';
import { DashboardComponent } from './compornent/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Angular_firebase_Crud'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [BookService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
