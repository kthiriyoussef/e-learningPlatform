package com.youssef.elearning.Service;

import java.util.List;

import com.youssef.elearning.DTO.CourseDTO;
import com.youssef.elearning.entities.Course;



public interface CourseService {
	Course saveCourse(Course C);
	Course updateCourse(Course C);
	void deleteCourse(Course C);
	List <Course> getCourses();
	void deleteCourseById(Long id);
	Course getCourse(Long id);
	CourseDTO convertEntityToDto (Course course);
	Course convertDtoToEntity(CourseDTO courseDTO);
	
}
