import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaviniSearchComponent } from './bhavini-search.component';

describe('BhaviniSearchComponent', () => {
  let component: BhaviniSearchComponent;
  let fixture: ComponentFixture<BhaviniSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaviniSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhaviniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
