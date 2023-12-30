import { Component, OnInit } from '@angular/core';
import { Course } from 'src/Course';
import { CourseService } from '../course-service.service';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/Image';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
courseToUpdate=new Course();
myImage! : string;
constructor(private courseService:CourseService,private activatedRoute: ActivatedRoute,){}
  ngOnInit(): void {
    this.courseService.getCourseid(this.activatedRoute.snapshot.params['id']).subscribe(cour => {this.courseToUpdate=
    cour;
  console.log(this.courseToUpdate)
  let idi=this.courseToUpdate.idImage
  this.courseService
.loadImage(this.courseToUpdate.image.idImage)
.subscribe((img: Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
});
})
console.log(this.courseToUpdate.image.idImage)
  }
updateCourse(){
  this.courseService
.updateCourse(this.courseToUpdate)
.subscribe((cour) => {
console.log('course updated Sucesfully');
});
}
}
