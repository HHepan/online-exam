package com.hepan.api.controller;

import com.hepan.api.entity.Question;
import com.hepan.api.entity.QuestionBank;
import com.hepan.api.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("question")
public class QuestionController {
    private QuestionService questionService;
    @Autowired
    QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    /**
     * 新增题目
     *
     * @param question 新增题目数据
     * @return 题目
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Question save(@RequestBody Question question) {
        return this.questionService.save(question);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.questionService.deleteById(id);
    }
}
