import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeData } from './type-data';

describe('TypeData', () => {
  let component: TypeData;
  let fixture: ComponentFixture<TypeData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeData],
    }).compileComponents();

    fixture = TestBed.createComponent(TypeData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
