import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // pageDisplayed = "bookshelf"
  title = 'bookit-app';

  // onNavigatePage(page: string) {
  //   this.pageDisplayed = page;
  // }
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoSignIn();
    console.log("app root init" )
  }


}
