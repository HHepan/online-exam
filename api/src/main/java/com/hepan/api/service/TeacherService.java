package com.hepan.api.service;

import com.hepan.api.entity.Teacher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TeacherService {
    Teacher save(Teacher teacher);

    Page<Teacher> page(String name, String phone, Pageable pageable);

    void deleteById(Long id);

    Teacher getById(Long id);
}
