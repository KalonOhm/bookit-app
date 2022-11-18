import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';
import { BookshelfComponent } from './bookshelf.component';
import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookshelfHomeComponent } from './bookshelf-home/bookshelf-home.component';
import { BookshelfEditorComponent } from './bookshelf-editor/bookshelf-editor.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BookFormTdComponent } from './book-form-td/book-form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookDetailsComponent,
    BookFormReactiveComponent,
    BookFormTdComponent,
    BookListComponent,
    BookshelfEditorComponent,
    BookshelfHomeComponent,
    BookshelfComponent,

  ],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule,
    BookshelfRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class BookshelfModule { }
