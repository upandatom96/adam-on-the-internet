import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactComponent } from "./contact.component";
import { HeaderComponent } from "../header/header.component";
import { BodyComponent } from "../body/body.component";

describe("ContactComponent", () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, HeaderComponent, BodyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
