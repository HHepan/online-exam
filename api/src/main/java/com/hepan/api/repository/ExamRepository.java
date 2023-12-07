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

    default Page<Exam> findAllByNameAndTeacherId(String name, Long teacherId, Pageable pageable) {
        Specification<Exam> specification = ExamSpecs.containingName(name)
                .and(ExamSpecs.byTeacherId(teacherId));

        return this.findAll(specification, pageable);
    };

    default Page<Exam> findAllByNameAndClazzId(String name, Long clazzId, Pageable pageable) {
        Specification<Exam> specification = ExamSpecs.containingName(name)
                .and(ExamSpecs.byClazzId(clazzId))
                .and(ExamSpecs.byHasPublish());

        return this.findAll(specification, pageable);
    };

}
