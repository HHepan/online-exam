package com.hepan.api.service;

import com.hepan.api.entity.Exam;
import com.hepan.api.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ExamService {
    Exam save(Exam exam);

    Page<Exam> page(String name, Long teacherId, Pageable pageable);

    void deleteById(Long id);

    Exam getById(Long id);

    Exam saveExamQuestions(Long id, List<Question> questions);

    Exam clearExamQuestionsById(Long id);

    Exam publishExamById(Long id);

    Exam backExamById(Long id);

    void refreshState();

    Page<Exam> pageForMyExam(String name, Long clazzId, Pageable pageable);
}
