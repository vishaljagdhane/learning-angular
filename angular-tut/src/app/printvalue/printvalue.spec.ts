import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Printvalue } from './printvalue';

describe('Printvalue', () => {
  let component: Printvalue;
  let fixture: ComponentFixture<Printvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Printvalue],
    }).compileComponents();

    fixture = TestBed.createComponent(Printvalue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
