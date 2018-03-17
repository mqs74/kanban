//import {JsonObject, JsonProperty} from "json2typescript";
import { AvatarUrls } from "../avatar-urls";

//@JsonObject
export class UserData {
  private _self: string;
  private _name: string;
  private _emailAddress: string;
  private _avatarUrls: AvatarUrls;
  private _displayName: string;

  constructor() {}

  // constructor(obj?: any) {
  //   this._self = obj && obj._self || null;
  //   this._name = obj && obj.name || null;
  //   this._displayName = obj && obj.displayName || null;
  //   this._emailAddress = obj && obj._emailAddress || null;
  //   this._avatarUrls = obj && obj._avatarUrls || null;
  // }

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

  get emailAddress(): string {
    return this._emailAddress;
  }

  set emailAddress(value: string) {
    this._emailAddress = value;
  }

  get avatarUrls(): AvatarUrls {
    return this._avatarUrls;
  }

  set avatarUrls(value: AvatarUrls) {
    this._avatarUrls = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }
}
