import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaviniComponent } from './bhavini.component';

describe('BhaviniComponent', () => {
  let component: BhaviniComponent;
  let fixture: ComponentFixture<BhaviniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaviniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaviniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
