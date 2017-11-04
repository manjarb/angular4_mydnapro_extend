import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { UrlService } from './url.service';
import { SessionService } from './session.service';

import { User } from '../model/user.model';

@Injectable()
export class AuthService {
  base_url: string;
  token: string;
  user: User = null;

  private fakeUserData: User = new User(
    '21', 'varis', 'darasirikul', 'varis.dara@gmail.com', 'dob_data_21'
  );

  constructor(
    private http: Http, private router: Router, private urlService: UrlService, private sessionService: SessionService
  ) { }

  signinUser(username: string, password: string) {
    this.base_url = this.urlService.returnBaseUrl();

    // Login User to get Token
    // return this.http.post(this.base_url + 'customer/login',
    //   {
    //     'username': username,
    //     'password': password
    //   }).subscribe((response: Response) => {
    //     this.token = response.json().token;
    //     this.sessionService.saveTokenStorage(this.token);
    //     this.router.navigate(['/results']);
    //   }, (error) => {
    //     console.log(error.statusText);
    //   });

    console.log(username, password);
    this.token = 'test_token';
    this.sessionService.saveTokenStorage(this.token);

    this.router.navigate(['/results']);
    this.user = this.fakeUserData;
  }

  getUser(): User {
    return this.user || this.fakeUserData;
  }
}
