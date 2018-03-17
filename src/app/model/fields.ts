import {FixVersion} from "./fix-version";
import {Status} from "./status";
import {IssueType} from "./issue-type";
import {Resolution} from "./resolution";
import {Version} from "./version";
import {Person} from "./person";
import {Priority} from "./priority";

export class Fields {
  private _summary: string;
  private _issuetype: IssueType;
  private _labels: string[];
  private _status: Status;
  private _resolution: Resolution;
  private _resolutiondate: string;
  private _customfield_10140: CustomeField;
  private _customfield_10000: CustomeField;
  private _customfield_10049: CustomeField;
  private _customfield_10149: CustomeField;
  private _customfield_10091: CustomeField;
  private _customfield_10046: CustomeField;
  private _customfield_13210: CustomeField;
  private _customfield_11513: CustomeField;
  private _versions: Version[];
  private _fixVersions: FixVersion[];
  private _reporter: Person;
  private _assignee: Person;
  private _created: string;
  private _updated: string;
  private _priority: Priority;

  constructor() {}

  get summary(): string {
    return this._summary;
  }

  set summary(value: string) {
    this._summary = value;
  }

  get issuetype(): IssueType {
    return this._issuetype;
  }

  set issuetype(value: IssueType) {
    this._issuetype = value;
  }

  get labels(): string[] {
    return this._labels;
  }

  set labels(value: string[]) {
    this._labels = value;
  }

  get status(): Status {
    return this._status;
  }

  set status(value: Status) {
    this._status = value;
  }

  get resolution(): Resolution {
    return this._resolution;
  }

  set resolution(value: Resolution) {
    this._resolution = value;
  }

  get resolutiondate(): string {
    return this._resolutiondate;
  }

  set resolutiondate(value: string) {
    this._resolutiondate = value;
  }

  get customfield_10140(): CustomField10140 {
    return this._customfield_10140;
  }

  set customfield_10140(value: CustomField10140) {
    this._customfield_10140 = value;
  }

  get customfield_10000(): CustomField10000 {
    return this._customfield_10000;
  }

  set customfield_10000(value: CustomField10000) {
    this._customfield_10000 = value;
  }

  get customfield_10049(): CustomField10049 {
    return this._customfield_10049;
  }

  set customfield_10049(value: CustomField10049) {
    this._customfield_10049 = value;
  }

  get customfield_10149(): CustomField10149 {
    return this._customfield_10149;
  }

  set customfield_10149(value: CustomField10149) {
    this._customfield_10149 = value;
  }

  get customfield_10091(): CustomField10091 {
    return this._customfield_10091;
  }

  set customfield_10091(value: CustomField10091) {
    this._customfield_10091 = value;
  }

  get customfield_10046(): CustomField10046 {Reporter
    return this._customfield_10046;
  }

  set customfield_10046(value: CustomField10046) {
    this._customfield_10046 = value;
  }

  get customfield_13210(): CustomField13210 {
    return this._customfield_13210;
  }
  set customfield_13210(value: CustomField13210) {
    this._customfield_13210 = value;
  }

  get customfield_11513(): CustomField11513 {
    return this._customfield_11513;
  }

  set customfield_11513(value: CustomField11513) {
    this._customfield_11513 = value;
  }

  get versions(): CustomeField[] {
    return this._versions;
  }

  set versions(value: CustomeField[]) {
    this._versions = value;
  }

  get fixVersions(): FixVersion[] {
    return this._fixVersions;
  }

  set fixVersions(value: FixVersion[]) {
    this._fixVersions = value;
  }

  get reporter(): Person {
    return this._reporter;
  }

  set reporter(value: Person) {
    this._reporter = value;
  }

  get assignee(): Person {
    return this._assignee;
  }
  set assignee(value: Person) {
    this._assignee = value;
  }

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  get updated(): string {
    return this._updated;
  }

  set updated(value: string) {
    this._updated = value;
  }

  get priority(): Priority {
    return this._priority;
  }

  set priority(value: Priority) {
    this._priority = value;
  }
}
