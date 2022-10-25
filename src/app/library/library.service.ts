import { HttpClient } from "@angular/common/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Book } from "../shared/book/book.model";


type BookResponseObject = Object & {
  docs: any[];
}

@Injectable({
  providedIn: "root"
})
export class LibraryService {
  bookListChanged = new EventEmitter<Book[]>();
  private allBooks: Book[] = [...]
  constructor(private http: HttpClient,
    ) {}






// allBooks: Book[] = [
//   new Book(
//     'Fahrenheit 451',
//     'Ray Bradbury',
//     'Fiction',
//     'https://source.unsplash.com/160x160/?mystery,book'
//     ),
//   new Book(
//     'Book of Besting',
//     'Bill Bilder',
//     'Self-Help',
//     'https://source.unsplash.com/150x160/?mystery,book'
//   ),
//   new Book(
//     'Celcius 232.77',
//     'Brad Raybury',
//     'Political Science',
//     'https://source.unsplash.com/170x170/?mystery,book'
//     ),
//     new Book(
//       "API Book 1",
//       "Will Wilder",
//       "Mystery",
//       "https://source.unsplash.com/250x50/?mystery,book"
//     ),
//     new Book(
//       "API Book 2",
//       "Nolan Hovis",
//       "Non-Fiction",
//       "https://source.unsplash.com/50x250/?serious,book"
//     ),
//     new Book(
//       "API Book 3",
//       "German Cruz",
//       "Mystery",
//       "https://source.unsplash.com/52x50/?mystery,book"
//     ),
//     new Book(
//       "API Book 4",
//       "Lex Pryor",
//       "Non-Fiction",
//       "https://source.unsplash.com/50x52/?serious,book"
//     ),
//   new Book(
//       'Testing Title 2',
//       'Nolan Hovis',
//       'Science',
//       'https://source.unsplash.com/50x50/?science,book'
//   ),
//   new Book(
//       'Fantasy Test',
//       'German Cruz',
//       'Non-Fiction',
//       'https://source.unsplash.com/50x50/?fantasy,book'
//   ),
//   new Book(
//       'Fantasy Test',
//       'Lex Pryor',
//       'Math',
//       'https://source.unsplash.com/50x50/?math,book'
//   ),
//   new Book(
//     'Children of Time',
//     'Adrian Person',
//     'Sci-Fi',
//     'https://source.unsplash.com/160x150/?mystery,book.jpg'
//     ),
//   new Book(
//     'Book of Testing',
//     'Will Wilder',
//     'Mystery',
//     'https://source.unsplash.com/50x50/?mystery,book'
//   ),
//   new Book(
//     'Book of Jesting',
//     'Jill Jilder',
//     'Yretsym',
//     'https://source.unsplash.com/150x150/?mystery,book'
//   ),
// ]

getBooks() {
  return this.allBooks.slice();
}

fetchBooks(searchQuery: string) {
  console.log("Clicked Fetch")
  console.log({searchQuery})

  const formattedQuery = searchQuery.split(' ').join('+').toLowerCase();

  this.http.get(`http://openlibrary.org/search/json?q=${formattedQuery}`)
  .subscribe((searchResponse) => {
    console.log('Seach Response: ', searchResponse);
    this.allBooks = []
    this.saveBooks(searchResponse)
  })
}

saveBooks(books: BookResponseObject) {
  this.allBooks = books.docs.map((book) => {
    //ToDo

    console.log({book})

    const { title, author_name, first_publish_year, isbn} = book;

    // ToDo: Get image path for the cover

    const newBook = new Book(
      title,
      author_name ? author_name[0] : '',
      'http://placeKitten.com/g/300',
      '',
      0,
      first_publish_year,
      isbn ? isbn[0] : '',
    );

    console.log({newBook})

    return newBook
  })

  this.bookListChanged.next(this.getBooks());
  }
}
