import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from '../bookshelf/bookshelf.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit, OnDestroy {
  alert!: string;
  private selectedBookSubscription!: Subscription;

  constructor(public bookshelfService: BookshelfService) {}

  ngOnInit(): void {
    this.selectedBookSubscription =
      this.bookshelfService.bookSelected.subscribe((book) => {
        this.alert = `Successfully added book: ${book.title} by ${book.author} to personal bookshelf!`;

        setTimeout(this.handleCloseModal, 4000);
      });


  }

  ngOnDestroy(): void {
    this.selectedBookSubscription.unsubscribe();
  }

  handleCloseModal() {
    this.alert = '';
  }
}
