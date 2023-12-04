package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
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
     * 分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页教师
     */
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<Teacher> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String phone,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.teacherService.page(name, phone, pageable);
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

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.teacherService.deleteById(id);
    }

    private interface PageJsonView extends
            Teacher.IdJsonView,
            Teacher.NameJsonView,
            Teacher.PhoneJsonView,
            Teacher.UserJsonView
    {}
}
