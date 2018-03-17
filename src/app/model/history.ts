import {Person} from "./person";
import {HistoryItem} from "./history-item";

export class History {
  private _id: number;
  private _author: Person;
  private _created: string;
  private _items: HistoryItem[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get author(): Person {
    return this._author;
  }

  set author(value: Person) {
    this._author = value;
  }

  get created(): string {
    return this._created;
  }

  set created(value: string) {
    this._created = value;
  }

  get items(): HistoryItem[] {
    return this._items;
  }

  set items(value: HistoryItem[]) {
    this._items = value;
  }
}
