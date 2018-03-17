export class Person {
  private _self: string;
  private _name: string;
  private _key: string;
  private _emailAddress: string;
  private _displayName: string;
  private _active: boolean;
  private _timeZone: string;

  constructor() {}

  get self(): string {
    return this._self;
  }

  set self(value: string) {
    this._self = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(value: string) {
    this._emailAddress = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get timeZone(): string {
    return this._timeZone;
  }

  set timeZone(value: string) {
    this._timeZone = value;
  }
}
