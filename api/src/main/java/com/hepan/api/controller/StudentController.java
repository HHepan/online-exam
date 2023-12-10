package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Student;
import com.hepan.api.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("student")
public class StudentController {
    private StudentService studentService;

    @Autowired
    StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    /**
     * 分页接口.
     *
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页学生
     */
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<Student> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String sno,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.studentService.page(name, sno, pageable);
    }

    @GetMapping("pageByClazzIds")
    @JsonView(PageJsonView.class)
    public Page<Student> pageByClazzIds(
            @RequestParam(required = false, defaultValue = "") List<Long> clazzIds,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.studentService.pageByClazzIds(clazzIds, pageable);
    }

    /**
     * 新增学生
     *
     * @param student 新增学生数据
     * @return 学生
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Student save(@RequestBody Student student) {
        return this.studentService.save(student);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.studentService.deleteById(id);
    }

    private interface PageJsonView extends
            Student.IdJsonView,
            Student.NameJsonView,
            Student.SnoJsonView,
            Student.ClazzJsonView,
            Student.UserJsonView
    {}
}
