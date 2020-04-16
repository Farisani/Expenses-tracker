import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoggedExpenseComponent } from './view-logged-expense.component';

describe('ViewLoggedExpenseComponent', () => {
  let component: ViewLoggedExpenseComponent;
  let fixture: ComponentFixture<ViewLoggedExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLoggedExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoggedExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
