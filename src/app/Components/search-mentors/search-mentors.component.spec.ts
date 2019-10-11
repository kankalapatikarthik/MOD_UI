import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMentorsComponent } from './search-mentors.component';

describe('SearchMentorsComponent', () => {
  let component: SearchMentorsComponent;
  let fixture: ComponentFixture<SearchMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
