package com.hepan.api.service;

import com.hepan.api.entity.Question;

public interface QuestionService {
    Question save(Question question);

    void deleteById(Long id);
}
