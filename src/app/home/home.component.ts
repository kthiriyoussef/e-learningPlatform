import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Course';
import { CourseService } from '../course-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Courses: Course []=[];
  constructor(private courseService : CourseService ){}
ngOnInit(): void {
  this.courseService.getCourses().subscribe((cour=>{
    this.Courses=cour;
  })) 

}
}
