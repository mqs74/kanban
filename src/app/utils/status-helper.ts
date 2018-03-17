import {Utils} from "./utils";
import {ChangelogHelper} from "./changelog-helper";
import {Issue} from "../model/issue";
import {IssueStatus} from "../model-ext/issue-status";
import {ChangeStatus} from "../model-ext/change-status";

export enum STATUS {
  Unknown, Backlog, Waiting, Other, Analyse, Ready, DEV_Queue, QA_Queue, Implement, Reproduce
};

export class StatusHelper {
  static STATUS_FIELD = 'status';
  static ASSIGNEE_FIELD = 'assignee';
  static RESOLUTION_FIELD = 'resolution';
  static FIX_VERSION_FIELD = 'Fix Versionn';

  static createChangeLogStatus(issue: Issue): IssueStatus {
    var issueStatus = new IssueStatus();

    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.changelog) || Utils.isEmpty(issue.changelog.histories))
      return issueStatus;

    var whenFrom = '';
    for(let history of issue.changelog.histories) {
      if(Utils.isEmpty(history) || Utils.isEmpty(history.items))
        break;

      var status = new ChangeStatus();
      for(let item of history.items) {
        if(ChangelogHelper.isHistoryFieldChanged(item, StatusHelper.STATUS_FIELD)) {
          // status changed
          status.stateTo = item.toString;
          status.stateFrom = item.fromString;
          issueStatus.stateUpdated = history.created;

          // Check how many times the fixed version has rolled over after the last resolution moment
          // 1. Ticket is re-opened - reset counter
          if(item.fromString === 'Resolved' || item.fromString === 'Closed') {
            issueStatus.fixVersionRolledOver = 0;
            issueStatus.createdOrSubmitted = history.created;
          }
        } else if(ChangelogHelper.isHistoryFieldChanged(item, StatusHelper.ASSIGNEE_FIELD)) {
          // assignee changed
          status.assigneeTo = item.toString;
          status.stateFrom = item.fromString;
          issueStatus.assigneeUpdated = history.created;
        } else if(ChangelogHelper.isHistoryFieldChanged(item, StatusHelper.RESOLUTION_FIELD)) {
          // resolution has been set
          status.resolution = item.toString;
        } else if(ChangelogHelper.isHistoryFieldSet(item, StatusHelper.FIX_VERSION_FIELD)) {
          // Check how many times the fixed version has rolled over after the last resolution moment
          // 2. Fix version has been changed/assigned
          issueStatus.fixVersionRolledOver += 1;
        }
      }

      if(status.isStateChanged() || status.isAssigneeChanged()) {
        status.who = history.author.name;
        status.whenFrom = whenFrom;
        status.whenTo = history.created;
        issueStatus.changeStatus.push(status);
        whenFrom = status.whenTo;
      }
    }

    return issueStatus;
  }
}
