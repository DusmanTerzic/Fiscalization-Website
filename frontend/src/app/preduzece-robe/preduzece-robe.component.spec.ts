import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceRobeComponent } from './preduzece-robe.component';

describe('PreduzeceRobeComponent', () => {
  let component: PreduzeceRobeComponent;
  let fixture: ComponentFixture<PreduzeceRobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreduzeceRobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceRobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
