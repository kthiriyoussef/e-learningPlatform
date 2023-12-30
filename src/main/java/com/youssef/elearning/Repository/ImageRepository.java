package com.youssef.elearning.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.youssef.elearning.entities.Image;

public interface ImageRepository extends JpaRepository<Image , Long> {
}
