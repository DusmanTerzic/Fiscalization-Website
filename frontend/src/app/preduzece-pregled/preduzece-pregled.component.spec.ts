import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzecePregledComponent } from './preduzece-pregled.component';

describe('PreduzecePregledComponent', () => {
  let component: PreduzecePregledComponent;
  let fixture: ComponentFixture<PreduzecePregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreduzecePregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzecePregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
