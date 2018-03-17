import {Field} from "./field";

export class Resolution extends Field {
  private _description: string;
  private _name: string;

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
}
