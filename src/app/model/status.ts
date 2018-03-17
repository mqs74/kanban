import {Field} from "./field";

export class Status extends Field {
  private _description: string;
  private _iconUrl: string;
  private _name: string;

  constructor() {}

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  set iconUrl(value: string) {
    this._iconUrl = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
