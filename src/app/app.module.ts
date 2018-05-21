import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyComponent } from './company-list/company/company.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      // link: httpLink.create({uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'}),
      link: httpLink.create({uri: 'http://localhost:8081/query'}),
      cache: new InMemoryCache()
    });
  }
 }
