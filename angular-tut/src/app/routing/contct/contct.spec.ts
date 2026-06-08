import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contct } from './contct';

describe('Contct', () => {
  let component: Contct;
  let fixture: ComponentFixture<Contct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contct],
    }).compileComponents();

    fixture = TestBed.createComponent(Contct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
