package com.hepan.api.repository;

import com.hepan.api.entity.Course;
import com.hepan.api.repository.specs.CourseSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface CourseRepository extends PagingAndSortingRepository<Course, Long>, CrudRepository<Course, Long>, JpaSpecificationExecutor<Course> {
    Iterable<Course> findAll();

    default Page<Course> findAllByName(String name, Pageable pageable) {
        Specification<Course> specification = CourseSpecs.containingName(name);

        return this.findAll(specification, pageable);
    };
}
