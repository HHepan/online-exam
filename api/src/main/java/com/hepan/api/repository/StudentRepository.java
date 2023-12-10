package com.hepan.api.repository;

import com.hepan.api.entity.Student;
import com.hepan.api.repository.specs.StudentSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface StudentRepository extends PagingAndSortingRepository<Student, Long>, CrudRepository<Student, Long>, JpaSpecificationExecutor<Student> {
    Iterable<Student> findAll();

    default Page<Student> findAllByNameAndSno(String name, String sno, Pageable pageable) {
        Specification<Student> specification = StudentSpecs.containingName(name)
                .and(StudentSpecs.containingSno(sno));

        return this.findAll(specification, pageable);
    };

    default Page<Student> findAllByClazzIds(List<Long> clazzIds, Pageable pageable) {
        Specification<Student> specification = StudentSpecs.containingClazzIds(clazzIds);

        return this.findAll(specification, pageable);
    };
}