import { routerTransitionSlideToLeft } from './../animations/router-animation';
import { Component, OnInit } from '@angular/core';
import { IConvertParameter } from './../definitions/iconvert-parameter';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ConverterService } from './../converter.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'cyl-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  animations: [routerTransitionSlideToLeft],
  host: { '[@routerTransition]': '' }
})
export class ConverterComponent implements OnInit {

  input: string;
  output: string;
  mode = 'normal';
  to = 'hiragana';
  modes = ['normal', 'spaced', 'okurigana', 'furigana'];
  targets = ['hiragana', 'katakana', 'romaji'];
  private convertStream = new Subject();
  constructor(private _converter: ConverterService) { }

  ngOnInit(): void {
    this.input = `誰かのことを 大切にしたいと思ってる人は、\r\nきっと、誰かの大切な人なんだと思います。`;

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
  onInputChange(value) {
    this.input = value;
    this.doConvert();
  }
}
