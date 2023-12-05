package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Course;
import com.hepan.api.entity.Exam;
import com.hepan.api.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<Exam> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.examService.page(name, pageable);
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

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.examService.deleteById(id);
    }

    private interface PageJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView,
            Exam.QuestionCountJsonView,
            Exam.ScoreJsonView,
            Exam.StartTimeJsonView,
            Exam.EndTimeJsonView,
            Exam.StateJsonView,
            Exam.ClazzesJsonView
    {}
}
