import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivegamefeedPage } from './livegamefeed.page';

describe('LivegamefeedPage', () => {
  let component: LivegamefeedPage;
  let fixture: ComponentFixture<LivegamefeedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivegamefeedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivegamefeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
