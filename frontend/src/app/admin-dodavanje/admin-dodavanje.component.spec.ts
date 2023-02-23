import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDodavanjeComponent } from './admin-dodavanje.component';

describe('AdminDodavanjeComponent', () => {
  let component: AdminDodavanjeComponent;
  let fixture: ComponentFixture<AdminDodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDodavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
