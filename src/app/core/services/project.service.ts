import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProjectService {
  private GET_PROJECTS =  './assets/data/projects.json';

  constructor(
    private http: HttpClient
  ) {}

  projects(): Observable<any> {
    return this.http.get<any>(`${this.GET_PROJECTS}`, {})
    .map((response: HttpResponse<any>) => response)
    .catch(this.handleError);
  }

  private handleError (error: any) {
    return Observable.throw(error);
  }

}
