import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLogDialogComponent } from './first-log-dialog.component';

describe('FirstLogDialogComponent', () => {
  let component: FirstLogDialogComponent;
  let fixture: ComponentFixture<FirstLogDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstLogDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
