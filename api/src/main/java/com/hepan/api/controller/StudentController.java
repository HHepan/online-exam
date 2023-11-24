package com.hepan.api.controller;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("student")
public class StudentController {
    private StudentService studentService;
    @Autowired
    StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    /**
     * 新增学生
     * @param student   新增学生数据
     * @return 学生
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Student save(@RequestBody Student student) {
        return this.studentService.save(student);
    }
}
