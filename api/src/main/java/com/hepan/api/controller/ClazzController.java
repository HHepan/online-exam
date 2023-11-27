package com.hepan.api.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.hepan.api.entity.Clazz;
import com.hepan.api.service.ClazzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("clazz")
public class ClazzController {
    private ClazzService clazzService;
    @Autowired
    ClazzController(ClazzService clazzService) {
        this.clazzService = clazzService;
    }

    /**
     * 分页接口.
     * @param name     名称
     * @param pageable 分页数据.
     * @return 分页班级
     */
    @GetMapping("page")
    @JsonView(PageJsonView.class)
    public Page<Clazz> page(
            @RequestParam(required = false, defaultValue = "") String name,
            @SortDefault.SortDefaults(@SortDefault(sort = "id", direction = Sort.Direction.DESC))
            Pageable pageable) {
        return this.clazzService.page(name, pageable);
    }

    /**
     * 新增班级
     * @param clazz   新增班级数据
     * @return 班级
     */
    @PostMapping("add")
    @ResponseStatus(HttpStatus.CREATED)
    public Clazz save(@RequestBody Clazz clazz) {
        return this.clazzService.save(clazz);
    }

    @JsonView(PageJsonView.class)
    @GetMapping("getAll")
    public Iterable<Clazz> getAll() {
        return this.clazzService.getAll();
    }

    @DeleteMapping("{id}")
    void delete(@PathVariable Long id) {
        this.clazzService.deleteById(id);
    }

    private interface PageJsonView extends
            Clazz.IdJsonView,
            Clazz.NameJsonView
    {}
}
