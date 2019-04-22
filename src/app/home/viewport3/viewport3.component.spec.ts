import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportComponent3 } from './viewport3.component';

describe('ViewportComponent', () => {
  let component: ViewportComponent3;
  let fixture: ComponentFixture<ViewportComponent3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportComponent3 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
