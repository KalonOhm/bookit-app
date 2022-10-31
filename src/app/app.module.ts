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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { NotificationComponent } from './shared/notification/notification.component';
import { BookFormTdComponent } from './bookshelf/book-form-td/book-form-td.component';
import { BookFormReactiveComponent } from './bookshelf/book-form-reactive/book-form-reactive.component';
import { SortBooksPipe } from './shared/pipes/sortBooks';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './shared/auth/auth.component'
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';

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
    DropdownDirective,
    BookshelfHomeComponent,
    BookshelfEditorComponent,
    NotificationComponent,
    BookFormTdComponent,
    BookFormReactiveComponent,
    SortBooksPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
