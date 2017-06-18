import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/interval';
import { Subject } from "rxjs/Subject";
declare var kuroshiro: any;

@Injectable()
export class ConverterService {
  isReady = false;
  constructor() {
    kuroshiro.init({
      dicPath: 'assets/dict/'
    },
      () => {
        this.isReady = true;
      }
    );
  }

  convert(mode: string, to: string, text: string): Observable<string> {
    return Observable
      .interval(500)
      .map(() => {
        if (!this.isReady) throw ('');
        return true;
      })
      .retry()
      .take(1)
      .map(() => {
        return kuroshiro.convert(text, { mode: mode, to: to });
      });
  }
}
