import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';

import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

}
