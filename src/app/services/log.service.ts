import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Log} from "../models/Log.model";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class LogService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public log(level: string, message: string): Observable<any> {
    const log: Log = {
      level,
      message,
      application: "adam-on-the-internet"
    };
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "log"
    });
    return this.http.post(url, log) as Observable<any>;
  }
}
