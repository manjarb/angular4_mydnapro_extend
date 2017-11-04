import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {

  returnBaseUrl(): string {
    return 'http://api.domain.com/';
  }

}
