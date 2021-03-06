/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuslistComponent } from './buslist.component';

describe('BuslistComponent', () => {
  let component: BuslistComponent;
  let fixture: ComponentFixture<BuslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
