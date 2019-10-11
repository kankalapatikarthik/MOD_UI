import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMentorComponent } from './user-mentor.component';

describe('UserMentorComponent', () => {
  let component: UserMentorComponent;
  let fixture: ComponentFixture<UserMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
