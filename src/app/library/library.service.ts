import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();


allBooks: Book[] = [
  new Book(
    'Fahrenheit 451',
    'Ray Bradbury',
    'Fiction',
    'https://source.unsplash.com/160x160/?mystery,book'
    ),
  new Book(
    'Book of Besting',
    'Bill Bilder',
    'Self-Help',
    'https://source.unsplash.com/150x160/?mystery,book'
  ),
  new Book(
    'Celcius 232.77',
    'Brad Raybury',
    'Political Science',
    'https://source.unsplash.com/170x170/?mystery,book'
    ),
    new Book(
      "API Book 1",
      "Will Wilder",
      "Mystery",
      "https://source.unsplash.com/250x50/?mystery,book"
    ),
    new Book(
      "API Book 2",
      "Nolan Hovis",
      "Non-Fiction",
      "https://source.unsplash.com/50x250/?serious,book"
    ),
    new Book(
      "API Book 3",
      "German Cruz",
      "Mystery",
      "https://source.unsplash.com/52x50/?mystery,book"
    ),
    new Book(
      "API Book 4",
      "Lex Pryor",
      "Non-Fiction",
      "https://source.unsplash.com/50x52/?serious,book"
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
]

getBooks() {
  return this.allBooks.slice();
}

}
