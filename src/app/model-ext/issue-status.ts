import {ChangeStatus} from "./change-status";

export class IssueStatus {
  private _changeStatus: ChangeStatus[];
  private _stateUpdated: string;
  private _assigneeUpdated: string;
  private _createdOrSubmitted: string;
  private  _fixVersionRolledOver: number;

  constructor() {
    this.changeStatus = new Array<ChangeStatus>();
  }

  get changeStatus(): ChangeStatus[] {
    return this._changeStatus;
  }

  set changeStatus(value: ChangeStatus[]) {
    this._changeStatus = value;
  }

  get stateUpdated(): string {
    return this._stateUpdated;
  }

  set stateUpdated(value: string) {
    this._stateUpdated = value;
  }

  get assigneeUpdated(): string {
    return this._assigneeUpdated;
  }

  set assigneeUpdated(value: string) {
    this._assigneeUpdated = value;
  }

  get createdOrSubmitted(): string {
    return this._createdOrSubmitted;
  }

  set createdOrSubmitted(value: string) {
    this._createdOrSubmitted = value;
  }

  get fixVersionRolledOver(): number {
    return this._fixVersionRolledOver;
  }

  set fixVersionRolledOver(value: number) {
    this._fixVersionRolledOver = value;
  }

  public toString(): string {
    return 'stateUpdated=[' + this.stateUpdated +
      '], assigneeUpdated=[' + this.assigneeUpdated +
      '], createdOrSubmitted=[' + this.createdOrSubmitted +
      '], fixVersionRolledOver=[' + this.fixVersionRolledOver +
      ']';
  }
}
