import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AlertComponent } from "./alert/alert.component";
import { AuthComponent } from "./auth/auth.component";
import { BookComponent } from "./book/book.component";
import { DropdownDirective } from "./directives/dropdown.directive";
import { PlaceholderDirective } from "./directives/placeholder.directive";
import { NavigationComponent } from "./navigation/navigation.component";
import { NotificationComponent } from "./notification/notification.component";
import { SortBooksPipe } from "./pipes/sortBooks";


@NgModule({
  declarations: [
    AlertComponent,
    AuthComponent,
    BookComponent,
    DropdownDirective,
    PlaceholderDirective,
    NavigationComponent,
    NotificationComponent,
    SortBooksPipe,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
    BookComponent,
    CommonModule,
    AuthComponent,
    NotificationComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [
    AlertComponent
  ],
})
export class SharedModule { }
