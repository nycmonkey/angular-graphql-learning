import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import gql from 'graphql-tag';
// import { map } from 'rxjs/operators';


import { Course, Query } from '../types';


const AllCoursesQuery = gql`
  query allCourses {
    allCourses {
      id
      title
      author
      description
      topic
      url
    }
  }
`;

@Component({
  selector: 'app-list',
  // templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  template: `
  <div *ngFor="let course of data | async | select: 'allCourses'">
    <div class="card" style="width: 100%; margin-top: 10px">
      <div class="card-body">
        <h5 class="card-title">{{course.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">by {{course.author}}</h6>
        <p class="card-text">{{course.description}}</p>
        <a href="{{course.url}}" class="card-link">Go to course ...</a>
      </div>
    </div>
  </div>
  `
})
export class ListComponent implements OnInit {
  data: Observable<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.data = this.apollo.watchQuery({query: AllCoursesQuery}).valueChanges; 
  }
}
