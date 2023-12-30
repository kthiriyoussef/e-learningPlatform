package com.youssef.elearning.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.youssef.elearning.DTO.CourseDTO;
import com.youssef.elearning.Repository.CourseRepository;
import com.youssef.elearning.entities.Course;


@Service
public class CourseServiceImpl implements CourseService {
	@Autowired
	CourseRepository CRp;
	@Autowired
	ModelMapper modelMapper;
	@Override
	 public Course saveCourse(Course c) {
	return  CRp.save(c);
	}
	@Override
	public Course updateCourse(Course c) {
	return CRp.save(c);
	}
	@Override
	public void deleteCourse(Course c) {
	CRp.delete(c);
	}
	
	@Override
	public List<Course>  getCourses() {
	return CRp.findAll();
	}
	@Override
	public void deleteCourseById(Long id) {
		CRp.deleteById(id);
		
	}
	@Override
	public Course getCourse(Long id) {
		return CRp.findById(id).get();
	}
	@Override
	public CourseDTO convertEntityToDto(Course course) {
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.LOOSE);
		CourseDTO courseDTO = modelMapper.map(course, CourseDTO.class);
		 return courseDTO; 

	
	}
	@Override
	public Course convertDtoToEntity(CourseDTO courseDTO) {
		Course course = new Course();
		course = modelMapper.map(courseDTO, Course.class);
	return course;
	}
}
