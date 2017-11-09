import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { ProjectService } from './../../../core/services/project.service';

import * as datasource from './project-list.datasource';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  displayedColumns = ['name'];
  listData: datasource.ProjectListData | null;
  dataSource: datasource.ProjectTableData | null;
  totalProjects: number;

  processing: boolean;
  error: boolean;

  @ViewChild('filter') filter: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  selected: any;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.processing = true;
    this.selected = {
      project: null
    };
    this.initProjects();
  }

  initProjects(project?: any) {
    this.processing = true;
    this.listData = new datasource.ProjectListData(this.projectService);
    this.dataSource = new datasource.ProjectTableData(this.listData, this.paginator);
    this.listData.dataChange.subscribe(
      data => {
        console.log('data', data);
        this.selected.project = data.projects[0];
        this.totalProjects = data.projects.length;
        this.processing = !data.loaded;
        this.error = data.error;
      });

    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe((val) => {
        if (!this.dataSource) { return; }
        this.dataSource.filter = this.filter.nativeElement.value;
        this.totalProjects = this.dataSource.totalProjects;
      });
  }

  edit(element: any) {
    this.selected = {
      project: element
    };
  }

  add() {
    this.selected = {
      project: {
        refId: null,
        isNew: true
      }
    };
  }

  reload(event: any) {
    if (event.reload) { this.initProjects(event.project); }
  }

}
