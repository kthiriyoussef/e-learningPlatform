import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Courses",component:DashboardComponent},
  {path:"addCourse",component:AddCourseComponent},
  {path:"updateCourse/:id",component:UpdateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
