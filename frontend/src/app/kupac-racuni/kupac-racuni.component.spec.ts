import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacRacuniComponent } from './kupac-racuni.component';

describe('KupacRacuniComponent', () => {
  let component: KupacRacuniComponent;
  let fixture: ComponentFixture<KupacRacuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacRacuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacRacuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
