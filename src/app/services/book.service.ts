import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
books : Observable<Book[]>;
booksCollection: AngularFirestoreCollection<Book>;
  constructor(public afs: AngularFirestore) { 
    this.books = this.afs.collection('books').valueChanges();
  }
  getBooks(){
    return this.books;
  }
}
