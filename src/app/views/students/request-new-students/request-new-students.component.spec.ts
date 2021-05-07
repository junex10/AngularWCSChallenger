import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewStudentsComponent } from './request-new-students.component';

describe('RequestNewStudentsComponent', () => {
  let component: RequestNewStudentsComponent;
  let fixture: ComponentFixture<RequestNewStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestNewStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
