import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguetablePage } from './leaguetable.page';

describe('LeaguetablePage', () => {
  let component: LeaguetablePage;
  let fixture: ComponentFixture<LeaguetablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguetablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguetablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
