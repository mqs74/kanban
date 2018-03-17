import {Field} from "./field";

export class IssueType extends Field {
  private _description: string;
  private _iconUrl: string;
  private _name: string;
  private _subtask: boolean;

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

  get subtask(): boolean {
    return this._subtask;
  }

  set subtask(value: boolean) {
    this._subtask = value;
  }
}
