export class Field {
  private _id: number;
  private _self: string;

  constructor() {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get self(): string {
    return this._self;
  }

  set self(value: string) {
    this._self = value;
  }
}
