package com.hepan.api.repository;

import com.hepan.api.entity.AnswerStatus;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AnswerStatusRepository  extends PagingAndSortingRepository<AnswerStatus, Long>, CrudRepository<AnswerStatus, Long>, JpaSpecificationExecutor<AnswerStatus> {
    Iterable<AnswerStatus> findAllByExamIdAndStudentId(Long examId, Long studentId);
}
