import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHiddenLoginComponent } from './dialog-hidden-login.component';

describe('DialogHiddenLoginComponent', () => {
  let component: DialogHiddenLoginComponent;
  let fixture: ComponentFixture<DialogHiddenLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHiddenLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHiddenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
