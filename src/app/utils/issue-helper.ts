import {Issue} from "../model/issue";
import {Utils} from "./utils";
import {forEach} from "@angular/router/src/utils/collection";

export class IssueHelper {
  constructor() {}

  static getResolution(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.resolution))
      return Utils.EMPTY_STRING;

    return issue.fields.resolution.name;
  }

  static getServenity(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_10140))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_10140.value;
  }

  static getInternalIssueId(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_10000))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_10000.value;
  }

  static getCustomerInternalSummary(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_10091))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_10091.value;
  }

  static getClientIssueId(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_10046))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_10046.value;
  }

  static getTaskType(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields))
      return Utils.EMPTY_STRING;

    if(!Utils.isEmpty(issue.fields.customfield_10049) && !Utils.isEmpty(issue.fields.customfield_10149))
      return issue.fields.customfield_10049.value;

    return Utils.EMPTY_STRING;
  }

  static getTestCasesBlocked(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_13210))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_13210.value;
  }

  static getRootCauses(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.customfield_11513))
      return Utils.EMPTY_STRING;

    return issue.fields.customfield_11513.value;
  }

  static getAffectsVersion(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.versions))
      return Utils.EMPTY_STRING;

    var result = '';
    var firstOccur = true;

    for(let version of issue.fields.versions) {
      if(firstOccur)
        firstOccur = false;
      else
        result += ',';

      result += version.name;
    }

    return result;
  }

  static getFixVersion(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.fixVersions))
      return Utils.EMPTY_STRING;

    var result = '';
    var firstOccur = true;

    for(let fixVersion of issue.fields.fixVersions) {
      if(firstOccur)
        firstOccur = false;
      else
        result += ',';

      result += fixVersion.name;
    }

    return result;
  }

  static getReporter(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.reporter))
      return Utils.EMPTY_STRING;

    return issue.fields.reporter.name;
  }

  static getAssignee(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.assignee))
      return Utils.EMPTY_STRING;

    return issue.fields.assignee.name;
  }

  static getPriority(issue: Issue): string {
    if(Utils.isEmpty(issue) || Utils.isEmpty(issue.fields) || Utils.isEmpty(issue.fields.priority))
      return Utils.EMPTY_STRING;

    return issue.fields.priority.name;
  }
}
