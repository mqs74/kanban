import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { AUTH_PROVIDERS } from './services/auth.service';
import { JIRA_PROVIDERS } from "./services/jira-service";
import { IssueComponent } from './issue/issue.component';

import 'rxjs/Rx';

const routes: Routes = [
  // basic routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'kboard', component: KanbanboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KanbanboardComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AUTH_PROVIDERS,
    JIRA_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
