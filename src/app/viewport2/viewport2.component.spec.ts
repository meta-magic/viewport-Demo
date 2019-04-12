import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportComponent2 } from './viewport2.component';

describe('ViewportComponent', () => {
  let component: ViewportComponent2;
  let fixture: ComponentFixture<ViewportComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
