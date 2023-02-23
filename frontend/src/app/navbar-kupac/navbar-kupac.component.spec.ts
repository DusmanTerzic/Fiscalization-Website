import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarKupacComponent } from './navbar-kupac.component';

describe('NavbarKupacComponent', () => {
  let component: NavbarKupacComponent;
  let fixture: ComponentFixture<NavbarKupacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarKupacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarKupacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
