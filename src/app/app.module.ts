import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    
    AppComponent,
    DashboardComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
