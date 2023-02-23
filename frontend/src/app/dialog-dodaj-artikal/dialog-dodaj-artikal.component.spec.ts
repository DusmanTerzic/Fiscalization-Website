import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDodajArtikalComponent } from './dialog-dodaj-artikal.component';

describe('DialogDodajArtikalComponent', () => {
  let component: DialogDodajArtikalComponent;
  let fixture: ComponentFixture<DialogDodajArtikalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDodajArtikalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDodajArtikalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
