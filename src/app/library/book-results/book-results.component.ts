import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-results',
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent implements OnInit {
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
