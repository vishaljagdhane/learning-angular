import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnClickFunction } from './on-click-function';

describe('OnClickFunction', () => {
  let component: OnClickFunction;
  let fixture: ComponentFixture<OnClickFunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnClickFunction],
    }).compileComponents();

    fixture = TestBed.createComponent(OnClickFunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
