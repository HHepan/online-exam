package com.hepan.api.service;

import com.hepan.api.entity.Exam;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ExamService {
    Exam save(Exam exam);

    Page<Exam> page(String name, Pageable pageable);

    void deleteById(Long id);

    Exam getById(Long id);
}
