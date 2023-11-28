package com.hepan.api.repository;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.repository.specs.StudentSpecs;
import com.hepan.api.repository.specs.TeacherSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface StudentRepository  extends PagingAndSortingRepository<Student, Long>, CrudRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    Iterable<Student> findAll();

    default Page<Student> findAllByNameAndPhone(String name, String sno, Pageable pageable) {
        Specification<Student> specification = StudentSpecs.containingName(name)
                .and(StudentSpecs.containingSno(sno));

        return this.findAll(specification, pageable);
    };
}