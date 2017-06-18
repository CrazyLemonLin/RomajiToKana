import { Observable } from 'rxjs/Observable';
import { AnalysisService } from './analysis.service';
import { ConverterService } from './converter.service';
import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'cyl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('loaderState',
      [
        transition(':enter', [
          style({ opacity: 1, transform: 'translateX(0)' }),
          animate('.5s')
        ]),
        transition(':leave', [
          animate('.5s', style({ opacity: 0, transform: 'translateX(-100%)' }))
        ])
      ]
    )
  ]
})
export class AppComponent implements OnInit {

  isAllServiceReady = false;
  /**
   *constructor
   */
  constructor(private _converterService: ConverterService, private _analysisService: AnalysisService) {

  }

  ngOnInit(): void {
    Observable
      .interval(300)
      .map(() => {
        if (this._analysisService.isReady && this._converterService.isReady) return true;
        throw ('');
      })
      .retry()
      .subscribe(() => {
        this.isAllServiceReady = true;
      })
  }
}
