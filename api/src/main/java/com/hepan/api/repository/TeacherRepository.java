package com.hepan.api.repository;

import com.hepan.api.entity.Teacher;
import com.hepan.api.repository.specs.TeacherSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TeacherRepository extends PagingAndSortingRepository<Teacher, Long>, CrudRepository<Teacher, Long>, JpaSpecificationExecutor<Teacher> {
    Iterable<Teacher> findAll();

    default Page<Teacher> findAllByNameAndPhone(String name, String phone, Pageable pageable) {
        Specification<Teacher> specification = TeacherSpecs.containingName(name)
                .and(TeacherSpecs.containingPhone(phone));

        return this.findAll(specification, pageable);
    };
}
