import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfesionalProjectsComponent } from "./profesional-projects.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("ProfesionalProjectsComponent", () => {
  let component: ProfesionalProjectsComponent;
  let fixture: ComponentFixture<ProfesionalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesionalProjectsComponent, HeaderComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
