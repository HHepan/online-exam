package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.AnswerStatus;
import com.hepan.api.service.AnswerStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("answerStatus")
public class AnswerStatusController {
    private AnswerStatusService answerStatusService;
    @Autowired
    AnswerStatusController(AnswerStatusService answerStatusService) {
        this.answerStatusService = answerStatusService;
    }

    /**
     * 新增答题状态
     * @param answerStatus   新增答题状态数据
     * @return 答题状态
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public AnswerStatus save(@RequestBody AnswerStatus answerStatus) {
        return this.answerStatusService.save(answerStatus);
    }

    @JsonView(getAllByExamIdAndStudentIdJsonView.class)
    @GetMapping("getAllByExamIdAndStudentId")
    public Iterable<AnswerStatus> getAllByExamIdAndStudentId(
            @RequestParam(required = false, defaultValue = "") Long examId,
            @RequestParam(required = false, defaultValue = "") Long studentId) {
        return this.answerStatusService.getAllByExamIdAndStudentId(examId, studentId);
    }

    @JsonView(getAllByExamIdAndStudentIdJsonView.class)
    @GetMapping("saveScoreById/{answerStatusId}")
    public AnswerStatus saveScoreById(
            @RequestParam(required = false, defaultValue = "") Long score,
            @PathVariable Long answerStatusId) {
        return this.answerStatusService.saveScoreById(answerStatusId, score);
    }

    private interface getAllByExamIdAndStudentIdJsonView extends
            AnswerStatus.IdJsonView,
            AnswerStatus.ExamJsonView,
            AnswerStatus.StudentJsonView,
            AnswerStatus.QuestionJsonView,
            AnswerStatus.StuAnswerJsonView,
            AnswerStatus.CorrectAnswerJsonView,
            AnswerStatus.PointsJsonView,
            AnswerStatus.ScoreJsonView
    {}
}
