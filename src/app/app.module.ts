import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './compornent/books/books.component';
import { BookService } from './services/book.service';
import { AddBookComponent } from './compornent/add-book/add-book.component';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'Angular_firebase_Crud'),
    AngularFirestoreModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
