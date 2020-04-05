import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResourcesComponent } from "./resources.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("ResourcesComponent", () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesComponent, HeaderComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
