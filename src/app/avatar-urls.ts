//import {JsonObject, JsonProperty} from "json2typescript";

//@JsonObject
export class AvatarUrls {

  //@JsonProperty('48x48')
  private _size48: string;

  //@JsonProperty('24x24')
  private _size24: string;

  //@JsonProperty('16x16')
  private _size16: string;

  //@JsonProperty('32x32')
  private _size32: string;

  constructor() {}

  // constructor(obj?: any) {
  //   this.self = obj && obj._size48 || null;
  //   this.name = obj && obj._size24 || null;
  //   this.displayName = obj && obj._size16 || null;
  //   this.avatarUrls = obj && obj._size32 || null;
  // }

  get size48(): string {
    return this._size48;
  }

  set size48(value: string) {
    this._size48 = value;
  }

  get size24(): string {
    return this._size24;
  }

  set size24(value: string) {
    this._size24 = value;
  }

  get size16(): string {
    return this._size16;
  }

  set size16(value: string) {
    this._size16 = value;
  }

  get size32(): string {
    return this._size32;
  }

  set size32(value: string) {
    this._size32 = value;
  }
}
