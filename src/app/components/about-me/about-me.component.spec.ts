import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutMeComponent } from "./about-me.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("AboutMeComponent", () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent, HeaderComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
