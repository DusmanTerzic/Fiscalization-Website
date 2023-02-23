import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceStoloviComponent } from './preduzece-stolovi.component';

describe('PreduzeceStoloviComponent', () => {
  let component: PreduzeceStoloviComponent;
  let fixture: ComponentFixture<PreduzeceStoloviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreduzeceStoloviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceStoloviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
