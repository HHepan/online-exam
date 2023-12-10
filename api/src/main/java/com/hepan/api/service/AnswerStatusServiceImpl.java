package com.hepan.api.service;

import com.hepan.api.entity.AnswerStatus;
import com.hepan.api.entity.Exam;
import com.hepan.api.repository.AnswerStatusRepository;
import org.springframework.stereotype.Service;

@Service
public class AnswerStatusServiceImpl implements AnswerStatusService {
    private AnswerStatusRepository answerStatusRepository;
    AnswerStatusServiceImpl(AnswerStatusRepository answerStatusRepository) {
        this.answerStatusRepository = answerStatusRepository;
    }

    @Override
    public AnswerStatus save(AnswerStatus answerStatus) {
        AnswerStatus a = answerStatus;
        Exam b = a.getExam();
        return this.answerStatusRepository.save(answerStatus);
    }

    @Override
    public Iterable<AnswerStatus> getAllByExamIdAndStudentId(Long examId, Long studentId) {
        return this.answerStatusRepository.findAllByExamIdAndStudentId(examId, studentId);
    }

    @Override
    public AnswerStatus saveScoreById(Long answerStatusId, Long score) {
        AnswerStatus answerStatus = this.answerStatusRepository.findById(answerStatusId).get();
        answerStatus.setScore(score);
        return this.answerStatusRepository.save(answerStatus);
    }
}
