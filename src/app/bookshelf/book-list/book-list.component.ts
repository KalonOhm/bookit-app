import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() currentSelectedBook = new EventEmitter<Book>();


  myBooks: Book[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  handleBookSelected(book: Book) {
    this.currentSelectedBook.emit(book);
  }



}
