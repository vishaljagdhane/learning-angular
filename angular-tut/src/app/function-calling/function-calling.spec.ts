import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCalling } from './function-calling';

describe('FunctionCalling', () => {
  let component: FunctionCalling;
  let fixture: ComponentFixture<FunctionCalling>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionCalling],
    }).compileComponents();

    fixture = TestBed.createComponent(FunctionCalling);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
