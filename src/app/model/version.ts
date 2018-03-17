import {Field} from "./field";

export class Version extends Field {
  private _name: string;
  private _archived: boolean;
  private _released: boolean;
  private _releaseDate: string;

  constructor() {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get archived(): boolean {
    return this._archived;
  }

  set archived(value: boolean) {
    this._archived = value;
  }

  get released(): boolean {
    return this._released;
  }

  set released(value: boolean) {
    this._released = value;
  }

  get releaseDate(): string {
    return this._releadeDate;
  }

  set releaseDate(value: string) {
    this._releadeDate = value;
  }
}
