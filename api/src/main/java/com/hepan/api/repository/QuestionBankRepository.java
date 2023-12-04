package com.hepan.api.repository;

import com.hepan.api.entity.QuestionBank;
import com.hepan.api.repository.specs.QuestionBankSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionBankRepository extends PagingAndSortingRepository<QuestionBank, Long>, CrudRepository<QuestionBank, Long>, JpaSpecificationExecutor<QuestionBank> {
    Iterable<QuestionBank> findAll();

    default Page<QuestionBank> findAllByName(String name, Pageable pageable) {
        Specification<QuestionBank> specification = QuestionBankSpecs.containingName(name);

        return this.findAll(specification, pageable);
    };
}
