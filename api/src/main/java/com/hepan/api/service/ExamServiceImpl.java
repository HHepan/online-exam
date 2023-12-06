package com.hepan.api.service;

import com.hepan.api.entity.Exam;
import com.hepan.api.entity.Question;
import com.hepan.api.repository.ExamRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {
    private ExamRepository examRepository;
    ExamServiceImpl(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    @Override
    public Exam save(Exam exam) {
        exam.setState(Exam.EXAM_UNPUBLISHED);
        return this.examRepository.save(exam);
    }

    @Override
    public Page<Exam> page(String name, Pageable pageable) {
        return this.examRepository.findAllByName(name, pageable);
    }

    @Override
    public void deleteById(Long id) {
        this.examRepository.deleteById(id);
    }

    @Override
    public Exam getById(Long id) {
        return this.examRepository.findById(id).get();
    }

    @Override
    public Exam saveExamQuestions(Long id, List<Question> questions) {
        Exam exam = this.getById(id);
        exam.setQuestions(questions);
        return this.examRepository.save(exam);
    }

    @Override
    public Exam clearExamQuestionsById(Long id) {
        Exam exam = this.getById(id);
        exam.setQuestions(null);
        return this.examRepository.save(exam);
    }
}
