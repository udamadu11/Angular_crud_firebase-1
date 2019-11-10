import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Book } from '../models/Book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
books : Observable<Book[]>;
booksCollection: AngularFirestoreCollection<Book>;
  constructor(public afs: AngularFirestore) { 

    this.booksCollection = afs.collection<Book>('books');
   // this.books = this.afs.collection('books').valueChanges();

    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Book;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }
  getBooks(){
    return this.books;
  }
  addBook(book:Book){
   this.booksCollection.add(book);
  }
}
