package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class QuestionBank {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @OneToMany(mappedBy = "questionBank")
    @JsonView(QuestionsJsonView.class)
    private List<Question> questions = new ArrayList<>();

    @ManyToOne()
    @JoinColumn(name = "course_id")
    @JsonView(CourseJsonView.class)
    private Course course;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Course getCourse() { return course; }

    public void setCourse(Course course) { this.course = course; }

    public List<Question> getQuestions() { return questions; }

    public void setQuestions(List<Question> questions) { this.questions = questions; }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface CourseJsonView extends
            Course.IdJsonView,
            Course.NameJsonView
    {}
    public interface QuestionsJsonView extends
            Question.IdJsonView,
            Question.StemJsonView,
            Question.OptionsJsonView,
            Question.AnswerJsonView
    {}

}
