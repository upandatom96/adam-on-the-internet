import { Component } from "@angular/core";
import { ContactBody } from "src/app/models/ContactBody.model";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { ContactService } from "src/app/services/contact.service";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent {
  public contact: ContactBody = {
    sender: null,
    message: null,
  };
  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.senderInvalid) {
      myErrors.push("Please provide your email.");
    }
    if (this.messageInvalid) {
      myErrors.push("Please provide a message.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get senderInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contact.sender);
  }

  private get messageInvalid(): boolean {
    return !BooleanHelper.hasValue(this.contact.message);
  }

  constructor(
    private contactService: ContactService,
    private navHelper: NavHelperService,
  ) { }

  public updateMessage(event) {
    this.contact.message = event.target.value;
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.send();
    }
  }

  private send() {
    let response;
    this.contactService.contactAOTI(this.contact)
      .subscribe((res) => response = res,
        (error) => {
          console.log("send email failed");
        }, () => {
          this.navHelper.goToDashboard();
        });
  }

}
