import { Component, OnInit } from '@angular/core';
import en from '../../../locale/en.json';

@Component({
  selector: 'lde-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent implements OnInit {

  lessons: Array<any> = [];
  constructor() { }

  ngOnInit() {
    console.log(en);

    for (let i = 0; i < 21; i++) {
      if (i === 0) {
        this.lessons.push({id: i+1, number: i+1, name: 'Знакомство с самим собой'})
      } else {
        this.lessons.push({id: i+1, number: i+1, name: ''})
      }
    }
  }

}
