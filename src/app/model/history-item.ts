export class HistoryItem {
  private _field: string;
  private _fieldType: string;
  private _from: string;
  private _fromString: string;
  private _to: string;
  private _toString: string;

  get field(): string {
    return this._field;
  }

  set field(value: string) {
    this._field = value;
  }

  get fieldType(): string {
    return this._fieldType;
  }

  set fieldType(value: string) {
    this._fieldType = value;
  }

  get from(): string {
    return this._from;
  }

  set from(value: string) {
    this._from = value;
  }

  get fromString(): string {
    return this._fromString;
  }

  set fromString(value: string) {
    this._fromString = value;
  }

  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get toString(): string {
   return this._toString;
  }

  set toString(value: string) {
   this._toString = value;
  }
}
