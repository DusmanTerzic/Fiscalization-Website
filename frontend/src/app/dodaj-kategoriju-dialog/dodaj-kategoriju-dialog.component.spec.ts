import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKategorijuDialogComponent } from './dodaj-kategoriju-dialog.component';

describe('DodajKategorijuDialogComponent', () => {
  let component: DodajKategorijuDialogComponent;
  let fixture: ComponentFixture<DodajKategorijuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajKategorijuDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajKategorijuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
