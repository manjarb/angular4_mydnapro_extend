import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  appSignin(user: {username: string, password: string}) {
    this.authService.signinUser(user.username, user.password);
  }
}
