import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookListComponent } from './bookshelf/book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { BookSearchComponent } from './library/book-search/book-search.component';
import { BookComponent } from './shared/book/book.component';
import { BookResultsComponent } from './library/book-results/book-results.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    BookDetailsComponent,
    BookListComponent,
    LibraryComponent,
    BookSearchComponent,
    BookComponent,
    BookResultsComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
