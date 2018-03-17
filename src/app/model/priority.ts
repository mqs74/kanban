import {Field} from "./field";

export class Priority extends Field {
  private _name: string;
  private _iconUrl: string;

  constructor () {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get iconUrl(): string {
    return this._iconUrl;
  }

  set iconUrl(value: string) {
    this._iconUrl = value;
  }
}
