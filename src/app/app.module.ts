import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { CardComponent } from "./components/card/card.component";
import { BodyAltComponent } from "./components/body-alt/body-alt.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ResourcesComponent } from "./components/resources/resources.component";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    AboutMeComponent,
    ProjectsComponent,
    ResourcesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
