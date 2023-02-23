import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceIzdavanjeComponent } from './preduzece-izdavanje.component';

describe('PreduzeceIzdavanjeComponent', () => {
  let component: PreduzeceIzdavanjeComponent;
  let fixture: ComponentFixture<PreduzeceIzdavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreduzeceIzdavanjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceIzdavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
