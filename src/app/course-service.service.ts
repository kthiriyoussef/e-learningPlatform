import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/Course';
import { Image } from 'src/Image';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  hostUrl='http://localhost:8080';
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]>{
    
    return this.http.get<Course[]>(this.hostUrl+'/elearning/Courses');
  }
  addCourse(course: Course):Observable<number> {
    
    return this.http.post<number>(this.hostUrl+'/elearning/addCourse', course);
  }
  getCourseid(id: number): Observable<any> {
    
    return this.http.get<Course[]>(this.hostUrl+`/elearning/Courses/${id}`);
  }
  updateCourse( updatedObject: Object): Observable<Course[]> {
   
    return this.http.put<Course[]>(this.hostUrl+`/elearning/updateCourse`, updatedObject);
  }
  uploadImage(file: File, filename: string): Observable<Image>{
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);
    const url = `${this.hostUrl + '/elearning/Course/image/upload'}`;
    return this.http.post<Image>(url, imageFormData);
    }
    loadImage(id: number): Observable<Image> {
      const url = `${this.hostUrl + '/elearning/Course/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
      }
      deleteCourse (id: number){
   
        return this.http.delete(this.hostUrl+`/elearning/delCourse/${id}`);
      }
      
}
