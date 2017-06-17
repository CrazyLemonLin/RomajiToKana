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

  constructor() { }

  ngOnInit() {
  }

}
