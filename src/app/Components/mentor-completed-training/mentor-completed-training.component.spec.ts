import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCompletedTrainingComponent } from './mentor-completed-training.component';

describe('MentorCompletedTrainingComponent', () => {
  let component: MentorCompletedTrainingComponent;
  let fixture: ComponentFixture<MentorCompletedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCompletedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCompletedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
