import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRemoveTechnologiesComponent } from './admin-add-remove-technologies.component';

describe('AdminAddRemoveTechnologiesComponent', () => {
  let component: AdminAddRemoveTechnologiesComponent;
  let fixture: ComponentFixture<AdminAddRemoveTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddRemoveTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddRemoveTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
