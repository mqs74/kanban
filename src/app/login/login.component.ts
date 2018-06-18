import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { UserData } from "../model/user-data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  loginMessage: boolean;
  passwordMessage: boolean;
  loading:boolean;

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.message = '';
    this.loginMessage = false;
    this.passwordMessage = false;
    this.loading = false;
  }

  login(login:string, password:string) {
    if(!this.validateInputFields(login, password))
      return;

    if(this.authService.isLoggedIn())
      this.authService.logout();

    this.message = '';
    this.loading = true;

    this.authService.login(login, password).subscribe(
      (userData: UserData) => {
        this.router.navigate(['/kboard'], {relativeTo: this.route});
      },
      (error) => {
        if(error.status == '401') {
          console.log('Login error for " + user + ", reason:' + error.status);
          this.setMessage('Incorrect credentials');
        } else if(error.status == '403') {
          console.log('Login error for " + user + ", reason:' + error.status);
          this.setMessage('Check capatha in the JIRA service');
        } else {
          console.log("Login error for " + login + ", error:" + error);
          this.setMessage('Server error');
        }
        this.loading = false;
      },
      ()=>console.log("Done."));
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

  private validateInputFields(login: string, password: string): boolean {
    this.setInputFieldsMessages(login, password);

    if(login == '' || password == '')
      return false;

    return true;
  }

  private setInputFieldsMessages(login: string, password: string) {
    if(login == '')
      this.loginMessage = true;
    else
      this.loginMessage = false;

    if(password == '')
      this.passwordMessage = true;
    else
      this.passwordMessage = false;
  }

  private setMessage(message: string) {
    this.message = message;

    setTimeout(function() {
      this.message = '';
    }.bind(this), 10000);
  }
}
