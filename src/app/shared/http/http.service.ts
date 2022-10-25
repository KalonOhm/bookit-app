import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  firebaseRootUrl: string = (process.env.['FIREBASE_API_ENDPOINT'] as string) + 'books.json';

  constructor(
    private http: HttpClient,
    private bookshelfService: BookshelfService
  ) {
    console.log(this.firebaseRootUrl)
  }

  saveBooksToFirebase() {
    const books = this.bookshelfService.getBooks();
    this.http.put(this.firebaseRootUrl, books).subscribe((res)=> {
      console.lost("Firebase BD Response: ", res);
    })
  }

  fetchBooksFromFirebase() {
    return this.http.get(this.firebaseRootUrl, {}).subscribe(res) => {
      bind(thisArg, ...argArray) {
        .bookshelfService
      },
    })
  })


}
