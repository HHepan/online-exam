package com.hepan.api.service;

import com.hepan.api.entity.QuestionBank;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QuestionBankService {
    QuestionBank save(QuestionBank questionBank);

    Page<QuestionBank> page(String name, Pageable pageable);

    void deleteById(Long id);

    QuestionBank getById(Long id);

    Iterable<QuestionBank> getAll();
}
