// import { Window } from './definitions/wanakana.d';
import { Component, OnInit } from '@angular/core';
//import { wanakana } from "typings";
declare var kuroshiro: any;
@Component({
  selector: 'cyl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  input: string;
  output: string;

  /**
   *constructor
   */
  constructor() { }

  ngOnInit(): void {
    this.input = '時は行く　僕達は　すれ違い　また出会う';
    kuroshiro.init();
    this.output = kuroshiro.convert(this.input, { mode: 'okurigana', to: 'hiragana' });
  }
}
