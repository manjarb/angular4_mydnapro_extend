import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../../../model/result.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  @Input() result: Result;
  @Input() index: number;

  ngOnInit() {
  }

}
