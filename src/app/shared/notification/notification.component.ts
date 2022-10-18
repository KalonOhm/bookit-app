import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  private bookChangeSubscription: Subscription = new Subscription()

  constructor(private bookshelfService: BookshelfService
    ) { }

  ngOnInit(): void {
    this.bookChangeSubscription = this.bookshelfService.bookSelected.subscribe((data) => {
      alert(`title: ${data.title}\nauthor: ${data.author}`)
    })

  }

  ngOnDestroy() {
    this.bookChangeSubscription.unsubscribe();
  }

}
