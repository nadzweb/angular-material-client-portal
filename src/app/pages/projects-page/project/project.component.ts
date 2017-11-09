import { Component, EventEmitter, Input, Output, OnChanges, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit, OnChanges {

  @Input('project') project: any;

  @Output() reload: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.setProject();
  }

  ngOnChanges(changes: any) {
    const project = changes.project.currentValue;
    if (!_.isNil(project)) {
      this.setProject();
    }
  }

  setProject() {
    const project = this.project;
    if (!_.isNil(this.project)) {
      this.project['allTags'] = this.getTags(this.project.tags);
    }

  }

  getTags(tags: string) {
    const scope = this;
    const projectTags = [];
    const tagsArray = _.split(tags, ',');
    _.each(tagsArray, function(tag, index) {
      projectTags.push({
        name: tag,
        color: scope.randomColor()
      });
    });
    console.log('projectsTags', projectTags);
    return projectTags;
  }

  randomColor() {
    const colors = ['primary', 'default', 'accent', 'warn'];
    return colors[_.random(0, 4)];
  }

}
