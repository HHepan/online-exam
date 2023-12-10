package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StudentService {
    Student save(Student student);

    Page<Student> page(String name, String sno, Pageable pageable);

    Student getById(Long id);

    void deleteById(Long id);

    Page<Student> pageByClazzIds(List<Long> clazzIds, Pageable pageable);
}
