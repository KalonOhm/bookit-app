import { Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpService } from '../http/http.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  show: boolean = false;
  isAuthenticated = false;




  constructor(
    private httpService: HttpService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    })
  }

  ngOnDestroy(): void {
    this.authService.currentUser.unsubscribe();
  }

  onSaveData() {
    this.httpService.saveBooksToFirebase();
  }

  onFetchData() {
    this.httpService.fetchBooksFromFirebase();
  }
}
