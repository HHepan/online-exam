package com.hepan.api.service;

import com.hepan.api.entity.Exam;
import com.hepan.api.entity.Question;
import com.hepan.api.repository.ExamRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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
    public Page<Exam> page(String name, Long teacherId, Pageable pageable) {
        return this.examRepository.findAllByNameAndTeacherId(name, teacherId,  pageable);
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

    @Override
    public Exam publishExamById(Long id) {
        Exam exam = this.getById(id);
        long currentTime = System.currentTimeMillis();
        if (currentTime < exam.getStartTime()) {
            exam.setState(Exam.EXAM_NOT_START);
        } else {
            if (currentTime < exam.getEndTime()) {
                exam.setState(Exam.EXAM_ING);
            } else {
                exam.setState(Exam.EXAM_OVER);
            }
        }
        return this.examRepository.save(exam);
    }

    @Override
    public Exam backExamById(Long id) {
        Exam exam = this.getById(id);
        exam.setState(Exam.EXAM_UNPUBLISHED);
        return this.examRepository.save(exam);
    }

    @Override
    public void refreshState() {
        List<Exam> allExams = (List<Exam>) this.examRepository.findAll();
        long currentTime = System.currentTimeMillis();
        allExams.forEach(exam -> {
            if (!Objects.equals(exam.getState(), Exam.EXAM_UNPUBLISHED)) {
                if (currentTime < exam.getStartTime()) {
                    exam.setState(Exam.EXAM_NOT_START);
                } else {
                    if (currentTime < exam.getEndTime()) {
                        exam.setState(Exam.EXAM_ING);
                    } else {
                        exam.setState(Exam.EXAM_OVER);
                    }
                }
                this.examRepository.save(exam);
            }
        });
    }

    @Override
    public Page<Exam> pageForMyExam(String name, Long clazzId, Pageable pageable) {
        return this.examRepository.findAllByNameAndClazzId(name, clazzId, pageable);
    }
}
