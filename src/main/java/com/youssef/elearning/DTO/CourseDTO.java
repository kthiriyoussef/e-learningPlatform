package com.youssef.elearning.DTO;

import java.util.Date;
import java.util.List;

import com.youssef.elearning.entities.Image;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CourseDTO {
	private Long idCourse;
	private String title;
	private Double price;
	private Image image;
	private Long idImage;
}