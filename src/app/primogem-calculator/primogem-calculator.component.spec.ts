import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimogemCalculatorComponent } from './primogem-calculator.component';

describe('PrimogemCalculatorComponent', () => {
  let component: PrimogemCalculatorComponent;
  let fixture: ComponentFixture<PrimogemCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimogemCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimogemCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
