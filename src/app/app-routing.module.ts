// import { LibraryComponent } from './library/library.component';
// import { BookshelfComponent } from './bookshelf/bookshelf.component';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookshelfModule } from './bookshelf/bookshelf.module';
// import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
// import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
// import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { AuthComponent } from './shared/auth/auth.component';
// import { AuthGuard } from './shared/auth/auth-guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  // {
  //   path: 'bookshelf',
  //   component: BookshelfComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: '', component: BookshelfHomeComponent },
  //     { path: 'new', component: BookshelfEditorComponent },
  //     { path: ':id', component: BookDetailsComponent },
  //     { path: ':id/edit', component: BookshelfEditorComponent },
  //   ],
  // },
  // { path: 'library', component: LibraryComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bookshelf', loadChildren: () => import ("./bookshelf/bookshelf.module").then((module) => module.BookshelfModule) },
  { path: 'library', loadChildren: ()=> import ("./library/library.module").then((module) => module.LibraryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules,
    initialNavigation: "enabledNonBlocking",
    
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
