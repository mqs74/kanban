export class Utils {
  static EMPTY_STRING = '';

  static isEmpty(object: any): boolean {
    if(object != (null||undefined)) {
      return false;
    }
    return true;
  }

  static getBoolean(value: string): boolean {
    if(value === "true")
      return true;
    return false;
  }
}
