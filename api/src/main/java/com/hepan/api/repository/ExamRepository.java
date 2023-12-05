package com.hepan.api.repository;

import com.hepan.api.entity.Exam;
import com.hepan.api.repository.specs.ExamSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ExamRepository extends PagingAndSortingRepository<Exam, Long>, CrudRepository<Exam, Long>, JpaSpecificationExecutor<Exam> {
    Iterable<Exam> findAll();

    default Page<Exam> findAllByName(String name, Pageable pageable) {
        Specification<Exam> specification = ExamSpecs.containingName(name);

        return this.findAll(specification, pageable);
    };
}