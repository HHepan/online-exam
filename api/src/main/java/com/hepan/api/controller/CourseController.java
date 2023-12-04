package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Clazz;
import com.hepan.api.entity.Course;
import com.hepan.api.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("course")
public class CourseController {
    private CourseService courseService;
    @Autowired
    CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    /**
     * 分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页课程
     */
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<Course> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.courseService.page(name, pageable);
    }

    /**
     * 新增课程
     * @param course   新增课程数据
     * @return 课程
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Course save(@RequestBody Course course) {
        return this.courseService.save(course);
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.courseService.deleteById(id);
    }

    @GetMapping("getAll")
    @JsonView(PageJsonView.class)
    public Iterable<Course> getAll() {
        return this.courseService.getAll();
    }

    private interface PageJsonView extends
            Course.IdJsonView,
            Course.NameJsonView
    {}
}
