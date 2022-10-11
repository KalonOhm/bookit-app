import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfEditorComponent } from './bookshelf-editor.component';

describe('BookshelfEditorComponent', () => {
  let component: BookshelfEditorComponent;
  let fixture: ComponentFixture<BookshelfEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshelfEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookshelfEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
