package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Course;
import com.hepan.api.entity.Exam;
import com.hepan.api.entity.Question;
import com.hepan.api.entity.QuestionBank;
import com.hepan.api.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("exam")
public class ExamController {
    private ExamService examService;
    @Autowired
    ExamController(ExamService examService) {
        this.examService = examService;
    }

    /**
     * 分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页考试
     */
    @GetMapping("page/{teacherId}")
    @JsonView(PageJsonView.class)
    public Page<Exam> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @PathVariable Long teacherId,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.examService.page(name, teacherId, pageable);
    }

    /**
     * 我的考试分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页我的考试
     */
    @GetMapping("pageForMyExam/{clazzId}")
    @JsonView(PageJsonView.class)
    public Page<Exam> pageForMyExam(
            @RequestParam(required = false, defaultValue = "") String name,
            @PathVariable Long clazzId,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.examService.pageForMyExam(name, clazzId, pageable);
    }

    /**
     * 新增考试
     *
     * @param exam 新增考试数据
     * @return 考试
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Exam save(@RequestBody Exam exam) {
        return this.examService.save(exam);
    }

    /**
     * 保存考试题目
     *
     * @param questions 新增考试数据
     * @return 考试
     */
    @PostMapping("saveExamQuestions/{id}")
    @JsonView(SaveExamQuestionJsonView.class)
    @ResponseStatus(HttpStatus.CREATED)
    public Exam saveExamQuestions(@PathVariable Long id,
                                  @RequestBody List<Question> questions
    ) {
        return this.examService.saveExamQuestions(id, questions);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.examService.deleteById(id);
    }

    @GetMapping("clearExamQuestionsById/{id}")
    @JsonView(GetByIdJsonView.class)
    Exam clearExamQuestionsById(@PathVariable Long id) {
        return this.examService.clearExamQuestionsById(id);
    }

    @GetMapping("publish/{id}")
    @JsonView(GetByIdJsonView.class)
    Exam publishExamById(@PathVariable Long id) {
        return this.examService.publishExamById(id);
    }

    @GetMapping("back/{id}")
    @JsonView(GetByIdJsonView.class)
    Exam backExamById(@PathVariable Long id) {
        return this.examService.backExamById(id);
    }

    @GetMapping("refreshState")
    @JsonView(GetByIdJsonView.class)
    void refreshState() {
        this.examService.refreshState();
    }

    @GetMapping("{id}")
    @JsonView(GetByIdJsonView.class)
    Exam getById(@PathVariable Long id) {
        return this.examService.getById(id);
    }

    private interface PageJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView,
            Exam.QuestionCountJsonView,
            Exam.ScoreJsonView,
            Exam.StartTimeJsonView,
            Exam.EndTimeJsonView,
            Exam.StateJsonView,
            Exam.ClazzesJsonView,
            Exam.QuestionsJsonView
    {}

    private interface GetByIdJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView,
            Exam.QuestionCountJsonView,
            Exam.ScoreJsonView,
            Exam.StartTimeJsonView,
            Exam.EndTimeJsonView,
            Exam.StateJsonView,
            Exam.ClazzesJsonView,
            Exam.QuestionsJsonView
    {}

    private interface SaveExamQuestionJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView,
            Exam.QuestionCountJsonView,
            Exam.ScoreJsonView,
            Exam.StartTimeJsonView,
            Exam.EndTimeJsonView,
            Exam.StateJsonView,
            Exam.ClazzesJsonView,
            Exam.QuestionsJsonView
    {}
}
