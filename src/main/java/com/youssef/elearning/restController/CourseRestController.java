package com.youssef.elearning.restController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.youssef.elearning.DTO.CourseDTO;
import com.youssef.elearning.Service.CourseService;
import com.youssef.elearning.entities.*;
@CrossOrigin
@RestController
public class CourseRestController {
	@Autowired
	CourseService courseService;
	
	@RequestMapping(path="/addCourse",method = RequestMethod.POST)
	public Course Course(@RequestBody Course course) {
	return courseService.saveCourse(course);
	}
	
	@RequestMapping(path="/updateCourse",method = RequestMethod.PUT)
	public Course updateCourse(@RequestBody Course course) {
	return courseService.updateCourse(course);
	}
	@RequestMapping(path="/Courses",method = RequestMethod.GET)
	public List <Course>getCourses() {
	return courseService.getCourses();
	}
	@RequestMapping(value="/delCourse/{id}",method = RequestMethod.DELETE)
	public void deleteCourse(@PathVariable("id") Long id)
	{
	courseService.deleteCourseById(id);
	}
	@RequestMapping(path="/Courses/{id}",method = RequestMethod.GET)
	public Course getCourse(@PathVariable("id") Long id)  {
	return courseService.getCourse(id);
	}
	

}
