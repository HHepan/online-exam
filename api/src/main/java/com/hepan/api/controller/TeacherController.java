package com.hepan.api.controller;

import com.hepan.api.entity.Teacher;
import com.hepan.api.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("teacher")
public class TeacherController {
    private TeacherService teacherService;
    @Autowired
    TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    /**
     * 新增教师
     * @param teacher   新增教师数据
     * @return 教师
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Teacher save(@RequestBody Teacher teacher) {
        return this.teacherService.save(teacher);
    }

}
