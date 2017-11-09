import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { ProjectService } from './../../../core/services/project.service';

export class ProjectTableData extends DataSource<any> {

  filterChange = new BehaviorSubject('');
  get filter(): string { return this.filterChange.value; }
  set filter(query: string) { this.filterChange.next(query); }

  filteredProjects: any[] = [];
  totalProjects = 0;

  constructor(
    private db: ProjectListData,
    private paginator: MatPaginator) {
    super();

    this.filterChange.subscribe(() => this.paginator.pageIndex = 0);
  }

  connect(): Observable<any> {
    const displayDataChanges = [
      this.db.dataChange,
      this.paginator.page,
      this.filterChange
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.db.data.projects.slice();
      this.filteredProjects = data.filter((item: any) => {
        const searchStr = (item.title + item.type + item.address).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      this.totalProjects = this.filteredProjects.length;
      const projects = this.filteredProjects;

      // Grab the page's slice of data.
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return projects.splice(startIndex, this.paginator.pageSize);
    });

  }

  disconnect() {}
}

export class ProjectListData {
  dataChange: BehaviorSubject<any> = new BehaviorSubject<any>({ projects: [] });

  get data(): any { return this.dataChange.value; }

  constructor( private projectService: ProjectService) {
    this.projectService.projects().subscribe(
      data => {
        this.dataChange.next({ projects: this.transform(data), loaded: true, error: false});
      },
      error => {
        this.dataChange.next({ projects: [], loaded: true, error: true});
      }
    );
  }

  transform(data: any) {
    return _.forEach(data, function(project, index) {
      project['isNew'] = false;
      project['refId'] = index;
    });
  }

}
