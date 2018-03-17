import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

import {UserData} from "./model/user-data";

@Injectable()
export class AuthService {

  static USER_LOGIN = '_user';
  static USER_CREDENTIALS = '_userC';

  private URI: string = 'https://helpdesk.clear2pay.com/helpdesk/rest/api/2/';
  private getUserService: string = 'myself';

  private userData: UserData;

  constructor(private http: Http) { }

  login(user:string, password:string): Observable<any> {
    var credentials = btoa(user + ':' + password);

    return this.http.get(this.URI + this.getUserService, this.prepareHeader(credentials)).map((res: Response) => {
      this.setUserData(res.json());
      this.setCredentials(credentials);
      this.setUserLogin(user);

      var urls = this.userData.avatarUrls;
      console.log('Returned row data: ', this.userData); // uncomment if you want to debug
      console.log('Returned row data with URLs: ', urls); // uncomment if you want to debug
      console.log('Mapped URL: ', urls.size48); // uncomment if you want to debug

      return this.userData;
      // return new UserData({
      //   self: data.self,
      //   name: data.name,
      //   displayName: data.displayName,
      //   emailAddress: data.emailAddress
      // })
    }).
    catch((error: any) => Observable.throw(error));
  }

  public logout() {
    if(this.isLoggedIn()) {
     this.removeCredentials();
     this.removeUserData();
     this.removeUserLogin();
    }
  }

  public isLoggedIn(): boolean {
    return this.getUserLogin() !== null;
  }

  public getUserLogin(): string {
    return localStorage.getItem(AuthService.USER_LOGIN);
  }

  public getUserData(): UserData {
    return this.userData;
  }

  public getCredentials(): string {
    return localStorage.getItem(AuthService.USER_CREDENTIALS);
  }

  private setUserLogin(login: string) {
    localStorage.setItem(AuthService.USER_LOGIN, login);
  }

  private removeUserLogin() {
    localStorage.removeItem(AuthService.USER_LOGIN);
  }

  private setCredentials(credentials: string) {
    localStorage.setItem(AuthService.USER_CREDENTIALS, credentials);
  }

  private removeCredentials() {
    localStorage.removeItem(AuthService.USER_CREDENTIALS);
  }

  private setUserData(userData: UserData) {
    this.userData = userData;
  }

  private removeUserData() {
    this.userData = undefined;
  }

  private prepareHeader(credentials: string): RequestOptions {
    const headers: Headers = new Headers();
    const options: RequestOptions = new RequestOptions();

    headers.append('Content-Type',  'application/json');

    if(credentials != null && credentials != '')
      headers.append('Authorization', 'Basic ' + credentials);

    options.headers = headers;

    return options;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
