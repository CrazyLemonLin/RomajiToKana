import { IConvertParameter } from './definitions/iconvert-parameter';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ConverterService } from './converter.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'cyl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  input: string;
  output: string;
  isLoading = true;
  mode = 'normal';
  to = 'hiragana';
  modes = ['normal', 'spaced', 'okurigana', 'furigana'];
  targets = ['hiragana', 'katakana', 'romaji'];
  private convertStream = new Subject();
  /**
   *constructor
   */
  constructor(private _converter: ConverterService) {

  }

  ngOnInit(): void {
    this.input = `誰かのことを 大切にしたいと思ってる人は、\r\nきっと、誰かの大切な人なんだと思います。`;

    Observable
      .interval(100)
      .map(() => {
        if (!this._converter.isReady) throw ('');
        return true;
      })
      .retry()
      .subscribe(() => this.isLoading = false);

    this.convertStream
      .startWith(0)
      .switchMap(() => {
        return this._converter.convert(this.mode, this.to, this.input);
      })
      .subscribe(r => {
        this.output = r;
      });
  }

  doConvert() {
    this.convertStream.next();
  }
  onInputChange(value){
    this.input = value;
    this.doConvert();
  }
}
