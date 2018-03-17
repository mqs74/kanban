import {Utils} from "./utils";
import {HistoryItem} from "../model/history-item";

export class ChangelogHelper {
  static isHistoryFieldSet(historyItem: HistoryItem, fieldName: string): boolean {
    if(Utils.isEmpty(historyItem))
      return false;

    return historyItem.field === fieldName && !Utils.isEmpty(historyItem.toString) && historyItem.toString != '';
  }

  static isHistoryFieldChanged(historyItem: HistoryItem, fieldName: string): boolean {
    if(Utils.isEmpty(historyItem))
      return false;

    return historyItem.field === fieldName && historyItem.fromString != historyItem.toString;
  }
}
