import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
import { BookshelfService } from '../bookshelf.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  private booklistSubscription: Subscription;

  @Output() currentSelectedBook = new EventEmitter<Book>();

  sortSwitcher = true;
  sortField = 'author';
  myBooks: Book[] = [

]

  constructor(
    private bookshelfService: BookshelfService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.myBooks = this.bookshelfService.getBooks()
    this.booklistSubscription = this.bookshelfService.bookListChanged.subscribe((books: Book[]) => this.myBooks = books)
  }

  // handleBookSelected(book: Book) {
  //   this.currentSelectedBook.emit(book);
  // }

  onRemoveBook( idx: number){
    this.bookshelfService.removeBook(idx)
  }

  onNewBook() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onSort() {
    this.sortSwitcher = !this.sortSwitcher;

    if (this.sortSwitcher) {
      this.sortField = 'author';
    } else {
      this.sortField = 'title';
    }
  }


  ngOnDestroy() {
    this.booklistSubscription.unsubscribe();
  }
}
