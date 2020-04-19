import { Component, OnInit } from "@angular/core";
import { ApplicationService } from 'src/app/services/application.service';
import { Application } from 'src/app/models/Application.model';
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  private applications: Application[] = null;

  public get featuredApps(): Application[] {
    return this.applications.filter((app) => {
      return app.status === 2;
    });
  }

  public get ready(): boolean {
    return BooleanHelper.hasValue(this.applications);
  }

  constructor(
    private applicationService: ApplicationService,
  ) { }

  public ngOnInit() {
    this.load();
  }

  private load(): void {
    this.applications = null;
    this.applicationService.getApplications()
      .subscribe((res) => this.applications = res,
        (error) => {
          console.log("get apps failed");
        });
  }

}
