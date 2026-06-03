import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnEvent } from './learn-event';

describe('LearnEvent', () => {
  let component: LearnEvent;
  let fixture: ComponentFixture<LearnEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
