import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFourComponent } from './top-four.component';

describe('TopFourComponent', () => {
  let component: TopFourComponent;
  let fixture: ComponentFixture<TopFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
