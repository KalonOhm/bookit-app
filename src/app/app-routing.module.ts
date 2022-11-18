
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bookshelf', pathMatch: 'full' },
  // {
  //   path: 'bookshelf',
  //   component: BookshelfComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: '', component: BookshelfHomeComponent },
  //     { path: 'new', component: BookshelfEditorComponent },
  //     { path: ':id', component: BookDetailsComponent, resolve: [BookResolverervice], },
  //     { path: ':id/edit', component: BookshelfEditorComponent, resolve: [BookResolverervice], },
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
