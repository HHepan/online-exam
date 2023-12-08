package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

@Entity
public class AnswerStatus {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(StuAnswerJsonView.class)
    private String stuAnswer;

    @JsonView(CorrectAnswerJsonView.class)
    private String correctAnswer;

    @OneToOne
    @JsonView(StudentJsonView.class)
    private Student student;

    @OneToOne
    @JsonView(ExamJsonView.class)
    private Exam exam;

    @OneToOne
    @JsonView(QuestionJsonView.class)
    private Question question;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getStuAnswer() { return stuAnswer; }

    public void setStuAnswer(String stuAnswer) { this.stuAnswer = stuAnswer; }

    public String getCorrectAnswer() { return correctAnswer; }

    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }

    public Student getStudent() { return student; }

    public void setStudent(Student student) { this.student = student; }

    public Exam getExam() { return exam; }

    public void setExam(Exam exam) { this.exam = exam; }

    public Question getQuestion() { return question; }

    public void setQuestion(Question exam) { this.question = question; }

    public interface IdJsonView {}
    public interface StuAnswerJsonView {}
    public interface CorrectAnswerJsonView {}
    public interface StudentJsonView extends
            Student.IdJsonView,
            Student.NameJsonView
    {}
    public interface ExamJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView
    {}
    public interface QuestionJsonView extends
            Question.IdJsonView
    {}
}
