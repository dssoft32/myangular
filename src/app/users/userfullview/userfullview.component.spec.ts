import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfullviewComponent } from './userfullview.component';

describe('UserfullviewComponent', () => {
  let component: UserfullviewComponent;
  let fixture: ComponentFixture<UserfullviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfullviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
