import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AnalysisService {
  private _tokenizer: kuromoji.Tokenizer<kuromoji.IpadicFeatures>;
  constructor() {
    kuromoji
      .builder({ dicPath: 'assets/dict/' })
      .build((err, tokenizer) => {
        this._tokenizer = tokenizer;
      });
  }

  analysis(text: string): Observable<kuromoji.IpadicFeatures[]> {
    return Observable
      .interval(500)
      .map(() => {
        if (!this._tokenizer) throw ('');
        return true;
      })
      .retry()
      .take(1)
      .map(() => {
        return this._tokenizer.tokenize(text);
      });
  }
}
