import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

import {SearchData} from "../model/search-data";
import {Issue} from "../model/issue";
import {IssueHelper} from "../utils/issue-helper";

@Injectable()
export class JiraService {

  static searchQuery: string = '?jql=((project=CSE)OR(project=CSSICI AND summary !~ \"CSE*\" AND summary !~ \"CLONE*\" AND ((\"Task Type\"=Defect AND IssueType!=Question) OR (labels= \"UPG_NFE\")) AND (fixversion is empty OR (fixversion != \"Future release\" AND fixversion != \"5.X\")))) AND ((resolution=Unresolved) OR (resolutiondate > \"2018-01-01 02:00\"))';
  static pageSize: number = 5; //100;

  private URI: string = 'https://helpdesk.clear2pay.com/helpdesk/rest/api/2/';
  private startAtCondition = 'startAt=';
  private maxResultsCondition = 'maxResults=';
  private changeLogCondition = 'expand=changelog';
  private searchService: string = 'search';

  private searchData: SearchData;

  constructor(private http: Http) { }

  public search(credentials: string, query: string, startAt: number): Observable<any> {
    var searchQuery = this.getDataSelectionConditions(this.URI + this.searchService + query, startAt, JiraService.pageSize);

    return this.http.get(searchQuery, this.prepareHeader(credentials)).
    map((res: Response) => {
      this.searchData = res.json();
      // console.log('raw item', this.searchData);
      for(let issue of this.searchData.issues) {
        this.logSearchData(issue);
      }

      return this.searchData;
    }).
    catch((error: any) => Observable.throw(error || 'Server error'));
  }

  calculatePages(total: number, pageSize: number): number {
    if(total == 0 || pageSize == 0)
      return 0;

    if(total%pageSize > 0)
     return Math.floor(total/pageSize) + 1;

    return Math.floor(total/pageSize);
  }

  private prepareHeader(credentials: string): RequestOptions {
    const headers: Headers = new Headers();
    const options: RequestOptions = new RequestOptions();

    headers.append('Content-Type',  'application/json');

    if(credentials != null && credentials != '')
      headers.append('Authorization', 'Basic ' + credentials);

    options.headers = headers;

    return options;
  }

  private getDataSelectionConditions(uri: string, startAt: number, maxPageSize: number): string {
    return uri + '&' + this.changeLogCondition + '&' + this.startAtCondition + startAt + '&' + this.maxResultsCondition + maxPageSize;
  }

  private logSearchData(issue: Issue) {
    console.log(
      'issue: id=' + issue.id +
      ', key=' + issue.key +
      ', self=' + issue.self +
      ', labels=' + issue.fields.labels +
      ', status.name=' + issue.fields.status.name +
      ', resolution=' + IssueHelper.getResolution(issue) +
      ', servenity=' + IssueHelper.getServenity(issue) +
      ', internalIssueId=' + IssueHelper.getInternalIssueId(issue) +
      ', customerInternalSummary=' + IssueHelper.getCustomerInternalSummary(issue) +
      ', clientIssueId=' + IssueHelper.getClientIssueId(issue) +
      ', taskType=' + IssueHelper.getTaskType(issue) +
      ', testCasesBlocked=' + IssueHelper.getTestCasesBlocked(issue) +
      ', rootCauses=' + IssueHelper.getRootCauses(issue) +
      ', affectsVersion=' + IssueHelper.getAffectsVersion(issue) +
      ', fixedVersion=' + IssueHelper.getFixVersion(issue) +
      ', reporter=' + IssueHelper.getReporter(issue) +
      ', assignee=' + IssueHelper.getAssignee(issue) +
      ', created=' + issue.fields.created +
      ', updated=' + issue.fields.updated +
      ', priority=' + IssueHelper.getPriority(issue));

    // issueType
    console.log(
      '->issue.fields.issueType: id=' + issue.fields.issuetype.id +
      ', self=' + issue.fields.issuetype.self +
      ', description=' + issue.fields.issuetype.description +
      ', iconUrl=' + issue.fields.issuetype.iconUrl +
      ', name=' + issue.fields.issuetype.name +
      ', subtask=' + issue.fields.issuetype.subtask);

    // resolution
    if(issue.fields.resolution != (null||undefined)) {
      console.log(
        '->issue.fields.resolution: id=' + issue.fields.resolution.id +
        ', self=' + issue.fields.resolution.self +
        ', description=' + issue.fields.resolution.description +
        ', name=' + issue.fields.resolution.name);
    }


    // console.log('--->fields.status: self=' + status.self + ', description=' + status.description + ', iconURL=' +
    //   status.iconUrl + ', name=' + status.name + ', id=' + status.id);

    // for(let fixVersion of issue.fields.fixVersion)
    //   console.log('fixVersion->self=' + fixVersion.self);
  }
}

export const JIRA_PROVIDERS: Array<any> = [
  { provide: JiraService, useClass: JiraService }
];
