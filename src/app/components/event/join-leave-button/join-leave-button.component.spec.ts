import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinLeaveButtonComponent } from './join-leave-button.component';

describe('JoinLeaveButtonComponent', () => {
  let component: JoinLeaveButtonComponent;
  let fixture: ComponentFixture<JoinLeaveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinLeaveButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinLeaveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
