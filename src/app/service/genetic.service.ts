import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { UrlService } from './url.service';
import { AuthService } from './auth.service';
import { Result } from '../model/result.model';

@Injectable()
export class GeneticService {
  resultsChanged = new Subject<Result[]>();

  private results: Result[] = [
    new Result(
      'Result name',
      'Symbol'
    ),
    new Result(
      'Result name',
      'Symbol'
    ),
    new Result(
      'Result name',
      'Symbol'
    ),
    new Result(
      'Result name',
      'Symbol'
    )
  ]

  constructor(
    private http: Http, private urlService: UrlService, private authService: AuthService
  ) { }

  getResult() {
    const user_id: string = this.authService.getUser().user_id;

    // Get results from the api
    // this.http.get(this.urlService + 'customer/' + user_id + '/genetic')
    //   .subscribe(
    //     (response) => {
    //       this.results = response.json().results;
    //       this.resultsChanged.next(this.results.slice());
    //     }
    //   );

    this.resultsChanged.next(this.results.slice());
    return this.results;
  }
}
