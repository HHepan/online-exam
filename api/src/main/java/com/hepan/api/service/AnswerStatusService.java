package com.hepan.api.service;

import com.hepan.api.entity.AnswerStatus;

public interface AnswerStatusService {
    AnswerStatus save(AnswerStatus answerStatus);

    Iterable<AnswerStatus> getAllByExamIdAndStudentId(Long examId, Long studentId);

    AnswerStatus saveScoreById(Long answerStatusId, Long score);
}
