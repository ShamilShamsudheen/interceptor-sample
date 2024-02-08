import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFalseComponent } from './button-false.component';

describe('ButtonFalseComponent', () => {
  let component: ButtonFalseComponent;
  let fixture: ComponentFixture<ButtonFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFalseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
