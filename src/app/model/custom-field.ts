import {Field} from "./field";

export class CustomField extends Field {
  private _value: string;

  constructor() {}

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
