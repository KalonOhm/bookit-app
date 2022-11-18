import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { Book } from '../shared/book/book.model';
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';
import { BookshelfService } from './bookshelf.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective) alertHost: any;
  private bookSelectedSub: Subscription
  private closeModalSub: Subscription
  bookSelected: Book


  constructor(
    private bookshelfService: BookshelfService,
    private componentFactoryResolver: ComponentFactoryResolver,
   ) { }

  ngOnInit(): void {
    this.bookSelectedSub = this.bookshelfService.bookSelected.subscribe((book) => {
      const alertMessage = `Successfully removed book ${book.title} by ${book.author} from your personal library.`;
      this.removeBookAlert(alertMessage);
    })
  }

  ngOnDestroy(): void {
    this.bookSelectedSub.unsubscribe();
  }

  handleCloseModal() {
    alert('Modal closed');
  }

  removeBookAlert (message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostContainerRef = this.alertHost.viewContainerRef;
    hostContainerRef.clear();

    const componentRef = hostContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.alertMessage = message;

    const clearAlert = () => {
      this.closeModalSub.unsubscribe();
      hostContainerRef.clear();
    }

    this.closeModalSub = componentRef.instance.closeModal.subscribe(clearAlert);

    setTimeout(() => {
      if (this.closeModalSub) clearAlert();
    }, 3000)
  }


}
