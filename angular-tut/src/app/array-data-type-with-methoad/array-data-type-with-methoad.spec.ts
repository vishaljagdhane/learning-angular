import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDataTypeWithMethoad } from './array-data-type-with-methoad';

describe('ArrayDataTypeWithMethoad', () => {
  let component: ArrayDataTypeWithMethoad;
  let fixture: ComponentFixture<ArrayDataTypeWithMethoad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayDataTypeWithMethoad],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayDataTypeWithMethoad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
