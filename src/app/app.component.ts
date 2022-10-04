import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageDisplayed = "bookshelf"
  title = 'bookit-app';

  onNavigatePage(page: string) {
    this.pageDisplayed = page;
  }




}
