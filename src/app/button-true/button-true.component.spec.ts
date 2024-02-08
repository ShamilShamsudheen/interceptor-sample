import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTrueComponent } from './button-true.component';

describe('ButtonTrueComponent', () => {
  let component: ButtonTrueComponent;
  let fixture: ComponentFixture<ButtonTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTrueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
