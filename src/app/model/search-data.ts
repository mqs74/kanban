import { Issue } from "./issue";

export class SearchData {
  private _expand: string;
  private _startAt: number;
  private _maxResults: number;
  private _total: number;
  private _issues: Issue[];

  constructor() {}

  get expand(): string {
    return this._expand;
  }

  set expand(value: string) {
    this._expand = value;
  }

  get startAt(): number {
    return this._startAt;
  }

  set startAt(value: number) {
    this._startAt = value;
  }

  get maxResults(): number {
    return this._maxResults;
  }

  set maxResults(value: number) {
    this._maxResults = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get issues(): Issue[] {
    return this._issues;
  }

  set issues(value: Issue[]) {
    this._issues = value;
  }
}
