import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainingInfoComponent } from './raining-info.component';

describe('RainingInfoComponent', () => {
  let component: RainingInfoComponent;
  let fixture: ComponentFixture<RainingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
