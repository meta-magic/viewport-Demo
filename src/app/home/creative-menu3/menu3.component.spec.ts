import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThreeComponent } from './menu3.component';

describe('MenuOneComponent', () => {
  let component: MenuThreeComponent;
  let fixture: ComponentFixture<MenuThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
