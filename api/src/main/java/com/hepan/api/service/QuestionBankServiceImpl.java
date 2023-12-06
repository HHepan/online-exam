package com.hepan.api.service;

import com.hepan.api.entity.QuestionBank;
import com.hepan.api.repository.QuestionBankRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class QuestionBankServiceImpl implements QuestionBankService {
    private QuestionBankRepository questionBankRepository;
    QuestionBankServiceImpl(QuestionBankRepository questionBankRepository) {
        this.questionBankRepository = questionBankRepository;
    }

    @Override
    public QuestionBank save(QuestionBank questionBank) {
        return this.questionBankRepository.save(questionBank);
    }

    @Override
    public Page<QuestionBank> page(String name, Pageable pageable) {
        return this.questionBankRepository.findAllByName(name, pageable);
    }

    @Override
    public void deleteById(Long id) {
        this.questionBankRepository.deleteById(id);
    }

    @Override
    public QuestionBank getById(Long id) {
        return this.questionBankRepository.findById(id).get();
    }

    @Override
    public Iterable<QuestionBank> getAll() {
        return this.questionBankRepository.findAll();
    }
}
