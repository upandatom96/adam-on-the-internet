import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ProfesionalProjectsComponent } from "./components/profesional-projects/profesional-projects.component";
import { SideProjectsComponent } from "./components/side-projects/side-projects.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  // pages
  { path: ROUTES_ENUM.ProfessionalProjects, component: ProfesionalProjectsComponent },
  { path: ROUTES_ENUM.SideProjects, component: SideProjectsComponent },
  { path: ROUTES_ENUM.AboutMe, component: AboutMeComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
