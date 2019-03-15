import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmineComponent } from './amine.component';

describe('AmineComponent', () => {
  let component: AmineComponent;
  let fixture: ComponentFixture<AmineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
