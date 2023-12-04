package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

@Entity
public class Question {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(StemJsonView.class)
    private String stem;

    @JsonView(OptionsJsonView.class)
    private String options;

    @JsonView(AnswerJsonView.class)
    private String answer;

    @ManyToOne()
    @JsonView(QuestionBankJsonView.class)
    @JoinColumn(name = "question_bank_id")
    private QuestionBank questionBank;


    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getStem() { return stem; }

    public void setStem(String stem) { this.stem = stem; }

    public String getOptions() { return options; }

    public void setOptions(String options) { this.options = options; }

    public String getAnswer() { return answer; }

    public void setAnswer(String answer) { this.answer = answer; }

    public QuestionBank getQuestionBank() { return questionBank; }

    public void setQuestionBank(QuestionBank questionBank) { this.questionBank = questionBank; }

    public interface IdJsonView {}
    public interface StemJsonView {}
    public interface OptionsJsonView {}
    public interface AnswerJsonView {}
    public interface QuestionBankJsonView {}
}
