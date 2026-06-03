import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallFunction } from './call-function';

describe('CallFunction', () => {
  let component: CallFunction;
  let fixture: ComponentFixture<CallFunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallFunction],
    }).compileComponents();

    fixture = TestBed.createComponent(CallFunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
