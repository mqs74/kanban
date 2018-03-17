export class Utils {
  static EMPTY_STRING = '';

  static isEmpty(object: Object): boolean {
    if(object != (null||undefined)) {
      return false;
    }
    return true;
  }
}
