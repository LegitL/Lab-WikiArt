import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingsPage } from './paintings.page';

describe('PaintingsPage', () => {
  let component: PaintingsPage;
  let fixture: ComponentFixture<PaintingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
