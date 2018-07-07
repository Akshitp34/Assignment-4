import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpricesComponent } from './bookprices.component';

describe('BookpricesComponent', () => {
  let component: BookpricesComponent;
  let fixture: ComponentFixture<BookpricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
