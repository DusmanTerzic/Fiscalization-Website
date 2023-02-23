import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceArtikliComponent } from './preduzece-artikli.component';

describe('PreduzeceArtikliComponent', () => {
  let component: PreduzeceArtikliComponent;
  let fixture: ComponentFixture<PreduzeceArtikliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreduzeceArtikliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceArtikliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
