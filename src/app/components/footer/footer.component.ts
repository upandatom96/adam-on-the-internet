import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {

  public get year(): number {
    return new Date().getFullYear();
  }

  constructor(
    private navHelper: NavHelperService,
  ) {
  }

  public goToContact() {
    this.navHelper.goToContact();
  }

  public goToAdamOnTheInternet() {
    const url = "https://www.adamontheinternet.com";
    window.open(url);
  }
}
