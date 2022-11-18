import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/auth/auth-guard';
import { SharedModule } from '../shared/shared.module';
import { BookResultsComponent } from './book-results/book-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { LibraryComponent } from './library.component';



@NgModule({
  declarations: [
    LibraryComponent,
    BookSearchComponent,
    BookResultsComponent,


  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LibraryComponent, canActivate: [AuthGuard] },
    ]),

  ]
})
export class LibraryModule { }
