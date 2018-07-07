import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLanguagesComponent } from './prog-languages.component';

describe('ProgLanguagesComponent', () => {
  let component: ProgLanguagesComponent;
  let fixture: ComponentFixture<ProgLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
