package com.hepan.api.service;

import com.hepan.api.entity.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CourseService {
    Page<Course> page(String name, Pageable pageable);

    Course save(Course course);

    void deleteById(Long id);

    Iterable<Course> getAll();
}
