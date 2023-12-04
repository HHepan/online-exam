package com.hepan.api.service;

import com.hepan.api.entity.Question;
import com.hepan.api.repository.QuestionRepository;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {
    private QuestionRepository questionRepository;
    QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public Question save(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public void deleteById(Long id) {
        this.questionRepository.deleteById(id);
    }
}
