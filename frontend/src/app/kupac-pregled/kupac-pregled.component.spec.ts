import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacPregledComponent } from './kupac-pregled.component';

describe('KupacPregledComponent', () => {
  let component: KupacPregledComponent;
  let fixture: ComponentFixture<KupacPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacPregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
