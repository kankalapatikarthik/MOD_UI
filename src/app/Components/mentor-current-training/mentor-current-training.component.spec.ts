import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCurrentTrainingComponent } from './mentor-current-training.component';

describe('MentorCurrentTrainingComponent', () => {
  let component: MentorCurrentTrainingComponent;
  let fixture: ComponentFixture<MentorCurrentTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorCurrentTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCurrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
