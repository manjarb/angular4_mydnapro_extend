import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { UrlService } from './url.service';
import { Result } from '../model/result.model';

@Injectable()
export class GeneticService {
  results: Result[];
  resultsChanged = new Subject<Result[]>();

  constructor(
    private http: Http, private urlService: UrlService
  ) { }

  getResult() {
    this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json')
      .subscribe(
        (response) => {
          this.results = response.json().results;
          this.resultsChanged.next(this.results.slice());
        }
      );

  }
}
