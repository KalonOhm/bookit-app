import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() idx: number=0;
  @Input() book: Book;
  @Output() bookSelected = new EventEmitter<void>();



  constructor() { }

  ngOnInit(): void {
  }


}
