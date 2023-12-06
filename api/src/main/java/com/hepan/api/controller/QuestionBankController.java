package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Course;
import com.hepan.api.entity.QuestionBank;
import com.hepan.api.entity.Student;
import com.hepan.api.service.QuestionBankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("questionBank")
public class QuestionBankController {
    private QuestionBankService questionBankService;
    @Autowired
    QuestionBankController(QuestionBankService questionBankService) {
        this.questionBankService = questionBankService;
    }

    /**
     * 分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页题库
     */
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<QuestionBank> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.questionBankService.page(name, pageable);
    }

    /**
     * 新增题库
     *
     * @param questionBank 新增题库数据
     * @return 题库
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public QuestionBank save(@RequestBody QuestionBank questionBank) {
        return this.questionBankService.save(questionBank);
    }

    @GetMapping("{id}")
    @JsonView(GetByIdJsonView.class)
    QuestionBank getById(@PathVariable Long id) {
        return this.questionBankService.getById(id);
    }

    @GetMapping("getAll")
    @JsonView(PageJsonView.class)
    public Iterable<QuestionBank> getAll() {
        return this.questionBankService.getAll();
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.questionBankService.deleteById(id);
    }

    private interface PageJsonView extends
            QuestionBank.IdJsonView,
            QuestionBank.NameJsonView,
            QuestionBank.CourseJsonView
    {}

    private interface GetByIdJsonView extends
            QuestionBank.IdJsonView,
            QuestionBank.NameJsonView,
            QuestionBank.CourseJsonView,
            QuestionBank.QuestionsJsonView
    {}
}
