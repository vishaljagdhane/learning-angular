import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRunValue } from './get-run-value';

describe('GetRunValue', () => {
  let component: GetRunValue;
  let fixture: ComponentFixture<GetRunValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRunValue],
    }).compileComponents();

    fixture = TestBed.createComponent(GetRunValue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
