import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Lesson} from "../models/lesson.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {


  constructor(
    private api:ApiService
  ) { }

  getLessons(): Observable<Array<Lesson>> {
    return this.api.getAllLessons().pipe(
      map(lessons => {
        console.log(lessons);
        return lessons.map(lesson => {
          return new Lesson(lesson)
        })
      })
    )
  }

}
