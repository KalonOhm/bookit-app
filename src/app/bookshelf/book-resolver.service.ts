import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http/http.service';
import { BookshelfService } from './bookshelf.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService implements Resolve<Book[]> {

  constructor(
    private bookshelfService: BookshelfService,
    private httpService: HttpService,
  ) { }




  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const books = this.bookshelfService.getBooks();

    if (books.length === 0 ) {
      return this.httpService.fetchBooksFromFirebase();
    } else {
      return books;
    }
  }
}
