export class ChangeStatus {
  private _who: string;
  private _whenTo: string;
  private _whenFrom: string;
  private _stateTo: string;
  private _stateFrom: string;
  private _assigneeTo: string;
  private _assigneeFrom: string;
  private _assigneeUpdated: string;
  private _resolution: string;

  get who(): string {
    return this._who;
  }

  set who(value: string) {
    this._who = value;
  }

  get whenTo(): string {
    return this._whenTo;
  }

  set whenTo(value: string) {
    this._whenTo = value;
  }

  get whenFrom(): string {
    return this._whenFrom;
  }

  set whenFrom(value: string) {
    this._whenFrom = value;
  }

  get stateTo(): string {
    return this._stateTo;
  }

  set stateTo(value: string) {
    this._stateTo = value;
  }

  get stateFrom(): string {
    return this._stateFrom;
  }

  set stateFrom(value: string) {
    this._stateFrom = value;
  }

  get assigneeTo(): string {
    return this._assigneeTo;
  }

  set assigneeTo(value: string) {
    this._assigneeTo = value;
  }

  get assigneeFrom(): string {
    return this._assigneeFrom;
  }

  set assigneeFrom(value: string) {
    this._assigneeFrom = value;
  }

  get assigneeUpdated(): string {
    return this._assigneeUpdated;
  }

  set assigneeUpdated(value: string) {
    this._assigneeUpdated = value;
  }

  get resolution(): string {
    return this._resolution;
  }

  set resolution(value: string) {
    this._resolution = value;
  }

  public isResolved(): boolean {
    return this.stateTo === 'Resolved' || this.stateTo === 'Rejected' ||
      (this.stateTo === 'Closed' && this.stateFrom !== 'Resolved' && this.stateFrom !== 'Rejected');
  }

  public isReopend(): boolean {
    return this.stateFrom === 'Closed' ||
      ((this.stateFrom === 'Rejected' || this.stateFrom === 'Resolved') && this.stateTo !== 'Closed');
  }

  public isStateChanged(): boolean {
    return this.assigneeTo !== '';
  }

  public isAssigneeChanged(): boolean {
    return this.assigneeTo !== '';
  }

  public toString(): string {
    return 'who=[' + this.who +
      '], whenTo=[' + this.whenTo +
      '], whenFrom=[' + this.whenFrom +
      '], stateTo=[' + this.stateTo +
      '], stateFrom=[' + this.stateFrom +
      '], assigneeTo=[' + this.assigneeTo +
      '], assigneeFrom=[' + this.assigneeFrom +
      '], assigneeUpdated=[' + this.assigneeUpdated +
      '], resolution=[' + this.resolution +
      ']';
  }
}
