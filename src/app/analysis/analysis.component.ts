import { ConverterService } from './../converter.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AnalysisService } from './../analysis.service';
import { Component, OnInit } from '@angular/core';
import { routerTransitionSlideToLeft } from "../animations/router-animation";
@Component({
  selector: 'cyl-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
  animations: [routerTransitionSlideToLeft],
  host: { '[@routerTransition]': '' }
})
export class AnalysisComponent implements OnInit {
  input: string;
  output: Observable<kuromoji.IpadicFeatures[]>;
  analysisStream = new Subject();
  constructor(private _analysisService: AnalysisService) { }

  ngOnInit() {
    this.input = `誰かのことを 大切にしたいと思ってる人は、\r\nきっと、誰かの大切な人なんだと思います。`;

    this.output = this.analysisStream
      .startWith(0)
      .switchMap(() => {
        return this._analysisService.analysis(this.input);
      })
      .share();
  }

  doAnalysis() {
    this.analysisStream.next();
  }

  onInputChange(value: string) {
    this.input = value;
    this.doAnalysis();
  }
}
