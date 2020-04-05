import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToInfo() {
    this.navHelper.goToInfo();
  }

  public goToProfessionalProjects() {
    this.navHelper.goToProfessionalProjects();
  }

  public goToSideProjects() {
    this.navHelper.goToSideProjects();
  }

  public goToAboutMe() {
    this.navHelper.goToAboutMe();
  }

}
