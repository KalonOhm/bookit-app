import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/book/book.model';
import { NgForm } from '@angular/forms';
import { BookshelfService } from '../bookshelf.service';


@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number = 0;
  isEditMode = false;
  bookDetails: Book = {
    title: "",
    author: "",
    genre: "",
    coverImagePath: ""
  };

  constructor(
    private route: ActivatedRoute,
    private bookshelfService: BookshelfService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idx= Number(params['id'])
      this.isEditMode = params['id'] != null;
      console.log("%c isEditMode: ", "color:red," ,this.isEditMode);
    })
  }

  onSubmit(formObj: NgForm) {
    // Destructor book properties
    const { title, author, genre, coverImagePath } = formObj.value;

    // Set local bookDetails to formObj values
    this.bookDetails = new Book(title, author, genre, coverImagePath);

    // Conditional statement to call different methods/functions depending on what "mode" we are in
    if (this.isEditMode) {
      // Edit book
      this.bookshelfService.updateBook(this.idx, this.bookDetails);
    } else {
      // Create new book
      this.bookshelfService.addBook(this.bookDetails);
    }

    // Reset Form
    this.onResetForm();
  }

  onResetForm() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }
}
