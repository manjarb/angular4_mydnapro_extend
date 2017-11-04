import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../service/auth.service';
import { GeneticService } from '../../service/genetic.service';
import { Result } from '../../model/result.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  results: Result[];

  constructor(private authService: AuthService, private geneticService: GeneticService) { }

  ngOnInit() {
    this.user = this.authService.getUser();

    this.subscription = this.geneticService.resultsChanged
      .subscribe(
        (results: Result[]) => {
          this.results = results;
        }
      );
    this.results = this.geneticService.getResult();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
