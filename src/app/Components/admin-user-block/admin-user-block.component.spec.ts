import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserBlockComponent } from './admin-user-block.component';

describe('AdminUserBlockComponent', () => {
  let component: AdminUserBlockComponent;
  let fixture: ComponentFixture<AdminUserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
