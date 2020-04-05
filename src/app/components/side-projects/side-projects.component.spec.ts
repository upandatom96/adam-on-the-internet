import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SideProjectsComponent } from "./side-projects.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("SideProjectsComponent", () => {
  let component: SideProjectsComponent;
  let fixture: ComponentFixture<SideProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideProjectsComponent, HeaderComponent, BodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
