import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppUserApi, SDKToken} from '../shared/sdk';
import {User} from '../shared/sdk/models/User';
import {LoopBackAuth} from '../shared/sdk/services/core/auth.service';
import {TitleService} from '../services/title.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public signUpUser: User = new User();
  public passwordConfirm: any;
  public email: any;

  public state = 'login';

  constructor(
      private userApi: AppUserApi,
      private authService: LoopBackAuth,
      private router: Router,
      private titleService: TitleService
  ) {}

  ngOnInit() {this.titleService.sendTitle('Authentication'); }

  setState(state: string): void {
    this.state = state;
  }

  login(user: User) {
    this.userApi.login(this.user)
        .subscribe((token: SDKToken) => {
          this.authService.setUser(token);
          this.router.navigate(['/']);
        }, (err: any) => {
          alert(err && err.message ? err.message : 'Login failed!');
          this.user.password = '';
        });
  }

  sign4up() {
    if (this.signUpUser.password !== this.passwordConfirm) {
      return alert('Passwords must match!');
    }

    this.userApi.create(this.signUpUser).subscribe((res: User) => {
      console.log('created.', res);
      if (res.id) {
        this.login(this.signUpUser);
      }
    });
  }

  resetPassword(email: any) {
    this.userApi.resetPassword({
      email: email
    }).subscribe((res: any) => {
      console.log('Restted!', res);
    });
  }

}
