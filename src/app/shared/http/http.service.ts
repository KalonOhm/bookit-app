import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { exhaustMap, take, tap } from 'rxjs';
import { Book } from '../book/book.model';
//import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootUrl: string =
    'https://bookit-app-1e5d3-default-rtdb.firebaseio.com/books.json';

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService // private authService: AuthService,
  ) {
    console.log(this.firebaseRootUrl);
  }

  saveBooksToFirebase() {
    const books = this.bookshelfService.getBooks();
    return this.http.put(this.firebaseRootUrl, books).subscribe((response) => {
      console.log('Firebase BD Response: ', response);
    });
  }

  fetchBooksFromFirebase() {
    // return this.http.get<Book[]>(this.firebaseRootUrl, {}).subscribe((res) => {
    //   this.bookshelfService.setBooks(res as Book[]);
    // });
    // return this.authService.currentUser.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     return this.http.get(this.firebaseRootUrl, {
    //       // for strictMode ?? "" default initialization
    //       params: new HttpParams().set('auth', user?.token ?? ""),
    //     })
    //     .pipe(
    //       tap((books: Book[]) => {
    //         this.bookshelfService.setBooks(books);
    //       })
    //     );
    //   })
    // )
    return this.http.get<Book[] | null>(this.firebaseRootUrl, {}).pipe(
      tap((books) => {
        this.bookshelfService.setBooks(books ?? []);
      })
    );
  }
}
