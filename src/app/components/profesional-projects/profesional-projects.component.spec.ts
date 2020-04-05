import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalProjectsComponent } from './profesional-projects.component';

describe('ProfesionalProjectsComponent', () => {
  let component: ProfesionalProjectsComponent;
  let fixture: ComponentFixture<ProfesionalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
