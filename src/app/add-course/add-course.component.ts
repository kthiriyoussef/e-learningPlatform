import { Component } from '@angular/core';
import { Course } from 'src/Course';
import { CourseService } from '../course-service.service';
import { Image } from 'src/Image';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
   newCourse=new Course();
   uploadedImage!: File;
imagePath: any;
   constructor(private courseService:CourseService){}
   addCousre(){
    this.courseService
.uploadImage(this.uploadedImage, this.uploadedImage.name)
.subscribe((img: Image) => {
  console.log("event sucesfully")
})


    this.courseService.
    addCourse(this.newCourse).subscribe((response)=>{
      console.log("Course added Sucessfuly");
   });
}
onImageUpload(event: any) {
  this.uploadedImage = event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = (_event) => { this.imagePath = reader.result; }
  }
  
}
