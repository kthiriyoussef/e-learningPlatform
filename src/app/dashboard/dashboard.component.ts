import { Component,OnInit } from '@angular/core';
import { Course } from 'src/Course';
import { CourseService } from '../course-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  Courses: Course []=[];
  constructor(private courseService : CourseService ){}
ngOnInit(): void {
  this.courseService.getCourses().subscribe((cour=>{
    this.Courses=cour;
  }))
  
}
confirmDelete(id: number) {
  if (confirm('Are you sure you want to delete this Course?')) {
    this.courseService.deleteCourse(id).subscribe(() => {
      console.log('Object deleted successfully!');
      this.ngOnInit();
    });
  }
}

}
