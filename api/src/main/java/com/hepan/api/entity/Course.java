package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Course {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @OneToMany(mappedBy = "course")
    @JsonView(QuestionBanksJsonView.class)
    private List<QuestionBank> questionBanks = new ArrayList<>();

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public List<QuestionBank> getQuestionBanks() { return questionBanks; }

    public void setQuestionBanks(List<QuestionBank> questionBanks) { this.questionBanks = questionBanks; }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface QuestionBanksJsonView {}
}
