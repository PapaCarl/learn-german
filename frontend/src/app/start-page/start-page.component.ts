import { Component, OnInit } from '@angular/core';
import {LessonsService} from "../shared/core-services/lessons.service";

@Component({
  selector: 'lde-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent implements OnInit {

  lessons: Array<any> = [];
  constructor(
    private lessonsService: LessonsService
  ) { }

  ngOnInit() {
    this.lessonsService.getLessons().subscribe(lessons => {
      this.lessons = lessons;
    })
  }

}
