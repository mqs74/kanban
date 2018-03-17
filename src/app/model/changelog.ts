import {Field} from "./field"
import {History} from "./history"

export class Changelog extends Field {
  private _startAt: number;
  private _maxResults: number;
  private _total: number;
  private _histories: History[];

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

  get histories(): History[] {
    return this._histories;
  }

  set histories(value: History[]) {
    this._histories = value;
  }
}
