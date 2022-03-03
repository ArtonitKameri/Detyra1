import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTextComponentsComponent } from './success-text-components.component';

describe('SuccessTextComponentsComponent', () => {
  let component: SuccessTextComponentsComponent;
  let fixture: ComponentFixture<SuccessTextComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessTextComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessTextComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
