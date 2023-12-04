package com.hepan.api.service;

import com.hepan.api.entity.Course;
import com.hepan.api.repository.CourseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {
    private CourseRepository courseRepository;
    CourseServiceImpl(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @Override
    public Page<Course> page(String name, Pageable pageable) {
        return this.courseRepository.findAllByName(name, pageable);
    }

    @Override
    public Course save(Course course) {
        return this.courseRepository.save(course);
    }

    @Override
    public void deleteById(Long id) {
        this.courseRepository.deleteById(id);
    }

    @Override
    public Iterable<Course> getAll() {
        return this.courseRepository.findAll();
    }
}
