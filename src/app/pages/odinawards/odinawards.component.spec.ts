import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdinawardsComponent } from './odinawards.component';

describe('OdinawardsComponent', () => {
  let component: OdinawardsComponent;
  let fixture: ComponentFixture<OdinawardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdinawardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdinawardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
