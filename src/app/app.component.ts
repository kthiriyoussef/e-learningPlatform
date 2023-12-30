import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Course';
import { CourseService } from './course-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Courses: Course []=[];
  constructor(private courseService : CourseService ){}
ngOnInit(): void {
  this.courseService.getCourses().subscribe((cour=>{
    this.Courses=cour;
  }))
  
}
}
