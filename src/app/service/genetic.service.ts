import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver/FileSaver';

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

  getReport() {
    const user_id: string = this.authService.getUser().user_id;
    const headers = new Headers();
    headers.append('Accept', 'application/pdf');
    const pdf_url = '/assets/pdf/test_pdf.pdf'; // this.urlService.returnBaseUrl() + `customer/${user_id}/report` for production
    const options = new RequestOptions({ headers: headers });
    options.responseType = ResponseContentType.Blob;
    this.http.get(pdf_url,
      options)
      .subscribe(
        (response) => {
          const blob = new Blob([response.blob()], { type: 'application/pdf' });
          saveAs(blob, 'health_report');
        }
      );
  }
}
