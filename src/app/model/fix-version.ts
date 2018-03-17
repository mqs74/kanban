import {Field} from "./field";

export class FixVersion extends Field {
  private _description: string;
  private _name: string;
  private _achieved: boolean;
  private _released: boolean;
  private _releaseDate: string;

  constructor() {}

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get achieved(): boolean {
    return this._achieved;
  }

  set achieved(value: boolean) {
    this._achieved = value;
  }

  get released(): boolean {
    return this._released;
  }

  set released(value: boolean) {
    this._released = value;
  }

  get releaseDate(): string {
    return this._releaseDate;
  }

  set releaseDate(value: string) {
    this._releaseDate = value;
  }
}
