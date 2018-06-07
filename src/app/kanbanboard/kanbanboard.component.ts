import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Issue} from "../model/issue";
import {SearchData} from "../model/search-data";
import {StatusHelper} from "../utils/status-helper";
import {AuthService} from "../auth.service";
import {JiraService} from "../jira-service";

@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.css']
})
export class KanbanboardComponent implements OnInit {

  userDisplayName: string;
  queryResult: Issue[];

  constructor(
    private authService: AuthService,
    private jiraService: JiraService,
    private router: Router,
    private route: ActivatedRoute) {
    this.queryResult = [];
  }

  logoutAction() {
    this.authService.logout();
  }

  private searchData(inputPage: number, inputPages: number) {
    var page = inputPage;
    var pages = inputPages;

    this.jiraService.search(this.authService.getCredentials(), JiraService.searchQuery, page).subscribe(
      (searchData: SearchData) => {
        //this.queryResult.concat(searchData);

        searchData.issues.forEach(issue=>{
          var issueStatus = StatusHelper.createChangeLogStatus(issue);
          this.queryResult.push(issue);

          console.log('S-> ' + issueStatus.toString())
          for(let status of issueStatus.changeStatus) {
            console.log('X-> ' + status.toString());
          }

          // console.log('summary=[' + issue.fields.summary + ']')
          //console.log('issueType=[' + issue.fields.issueType.name + ']');
        });

        // for(let issue of searchData.issues) {
        //   this.queryResult.push(issue);
        // }

        if(pages == 1)
          //pages = this.jiraService.calculatePages(searchData.total, JiraService.pageSize);
          pages = 2;

        console.log('Search successfully done for page [' + page + '/' + pages + ']');

        if(page < pages) {
          page += 1;
          this.searchData(page, pages);
        } else {
          this.processReport();
        }
      },
      (error) => {
        if(error.status == '401') {
          console.log('Search error for " + user + ", reason:' + error.status);
        } else if(error.status == '403') {
          console.log('Search error for " + user + ", reason:' + error.status);
        } else {
          console.log("Search error for " + this.authService.getUserLogin() + ", error:" + error);
        }
      },
      ()=>console.log('Done.')
    );
  }

  private processReport() {
    console.log('Processing report, number of issues=[' + this.queryResult.length + ']');
  }

  ngOnInit() {
    if(!this.authService.isLoggedIn())
      this.router.navigate(['/'], {relativeTo: this.route});

    this.userDisplayName = this.authService.getUserData().displayName;
    this.searchData(1, 1);
  }


  // @HostListener('window:beforeunload', ['$event'])
  // beforeunloadHandler(event) {
  //   sessionStorage.setItem("kanbanboardExit", "false");
  // }
}
