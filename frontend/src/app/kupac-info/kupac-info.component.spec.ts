import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacInfoComponent } from './kupac-info.component';

describe('KupacInfoComponent', () => {
  let component: KupacInfoComponent;
  let fixture: ComponentFixture<KupacInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
