import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Application } from "../models/Application.model";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { CookieHelper } from "../utilities/cookie.util";

const controller = "application";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(
    private http: HttpClient,
  ) { }

  public getApplications(): Observable<Application[]> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller
    });
    return this.http.get(url, CookieHelper.authHeaders) as Observable<Application[]>;
  }
}
