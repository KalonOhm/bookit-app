import { Injectable } from '@angular/core';
import { Book } from '../shared/book/book.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookshelfService {
  // Data sources should be IMMUTABLE!
  private myBooks: Book[] = [
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Testing Title 2',
      'Nolan Hovis',
      'Science',
      'https://source.unsplash.com/50x50/?science,book'
    ),
    new Book(
      'Fantasy Test',
      'German Cruz',
      'Non-Fiction',
      'https://source.unsplash.com/50x50/?fantasy,book'
    ),
    new Book(
      'Fantasy Test',
      'Lex Pryor',
      'Math',
      'https://source.unsplash.com/50x50/?math,book'
    ),
    new Book(
      'Children of Time',
      'Adrian Person',
      'Sci-Fi',
      'https://source.unsplash.com/160x150/?mystery,book.jpg'
    ),
    new Book(
      'Book of Testing',
      'Will Wilder',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Book of Jesting',
      'Jill Jilder',
      'Yretsym',
      'https://source.unsplash.com/150x150/?mystery,book'
    ),
  ];

  bookSelected = new Subject<Book>();
  bookListChanged = new Subject<Book[]>();

  //Create
  saveBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
  }

  //Read
  getBooks() {
    return this.myBooks.slice();
  }

  //Update
  getBook(idx: number) {
    return this.getBooks()[idx];
  }

  //Delete
  removeBook(idx: number) {
    if (idx !== -1) {
      this.myBooks.splice(idx, 1);
      this.bookListChanged.next(this.myBooks.slice());
    }
  }

  addBook(book: Book) {
    this.myBooks.push(book);
    this.bookListChanged.next(this.myBooks.slice());
  }

  updateBook(idx: number, updatedBook: Book) {
    this.myBooks[idx] = updatedBook;
    this.bookListChanged.next(this.myBooks.slice());
  }

  setBooks(books: Book[]) {
    this.myBooks = books;
    this.bookListChanged.next(this.getBooks());
  }
}
