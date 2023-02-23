import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPreduzeceComponent } from './navbar-preduzece.component';

describe('NavbarPreduzeceComponent', () => {
  let component: NavbarPreduzeceComponent;
  let fixture: ComponentFixture<NavbarPreduzeceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPreduzeceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPreduzeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
