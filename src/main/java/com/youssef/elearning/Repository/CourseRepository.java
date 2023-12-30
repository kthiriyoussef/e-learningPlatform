package com.youssef.elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.youssef.elearning.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
