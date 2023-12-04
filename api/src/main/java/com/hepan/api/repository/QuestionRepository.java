package com.hepan.api.repository;

import com.hepan.api.entity.Question;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long>, CrudRepository<Question, Long>, JpaSpecificationExecutor<Question> {
}
