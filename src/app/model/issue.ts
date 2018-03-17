import {Field} from "./field";
import {Fields} from "./fields";
import {Changelog} from "./changelog";
import {HistoryItem} from "./history-item";

export class Issue extends Field {
  private _key: string;
  private _fields: Fields;
  private _changelog: Changelog;
  private _changeStatusLog: HistoryItem;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get fields(): Fields {
    return this._fields;
  }

  set fields(value: Fields) {
    this._fields = value;
  }

  get changelog(): Changelog {
    return this._changelog;
  }

  set changelog(value: Changelog) {
    this._changelog = value;
  }

  get changeStatusLog(): HistoryItem {
    return this._changeStatusLog;
  }

  set changeStatusLog(value: HistoryItem) {
    this._changeStatusLog = value;
  }
}
