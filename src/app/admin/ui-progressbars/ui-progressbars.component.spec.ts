import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressbarsComponent } from './ui-progressbars.component';

describe('UiProgressbarsComponent', () => {
  let component: UiProgressbarsComponent;
  let fixture: ComponentFixture<UiProgressbarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiProgressbarsComponent]
    });
    fixture = TestBed.createComponent(UiProgressbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
