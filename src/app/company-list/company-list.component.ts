import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { Company, Person, Query } from '../types';

@Component({
  selector: 'app-company-list',
  styleUrls: ['./company-list.component.css'],
  template: `
  <div class="card-columns" *ngFor="let company of data | async | select: 'companies'">
    <div class="card">
      <img class="card-img-top" style="max-width: 100px;" src="{{company.logoUrl}}" alt="{{company.name}} logo" />
      <div class="card-body">
        <h5 class="card-title">{{company.name}}</h5>
        <p class="card-text">{{company.executive && company.executive.name}}</p>
      </div>
    </div>
  </div>
  `
})
export class CompanyListComponent implements OnInit {

  data: Observable<any>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.data = this.apollo.watchQuery({query: CompaniesQuery}).valueChanges; 
  }

}



const CompaniesQuery = gql`
  query companies {
    companies {
      id
      name
      homepage
      logoUrl
      executive {
        name
        photoURLs
      }
    }
  }
`;