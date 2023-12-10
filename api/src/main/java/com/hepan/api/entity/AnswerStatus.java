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

    @JsonView(ScoreJsonView.class)
    private Long score;

    @JsonView(PointsJsonView.class)
    private Long points;

    @ManyToOne
    @JsonView(StudentJsonView.class)
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JsonView(ExamJsonView.class)
    @JoinColumn(name = "exam_id")
    private Exam exam;

    @ManyToOne
    @JsonView(QuestionJsonView.class)
    @JoinColumn(name = "question_id")
    private Question question;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getStuAnswer() { return stuAnswer; }

    public void setStuAnswer(String stuAnswer) { this.stuAnswer = stuAnswer; }

    public String getCorrectAnswer() { return correctAnswer; }

    public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }

    public Student getStudent() { return student; }

    public void setStudent(Student student) { this.student = student; }

    public Long getScore() { return score; }

    public void setScore(Long score) { this.score = score; }

    public Long getPoints() { return points; }

    public void setPoints(Long points) { this.points = points; }

    public Exam getExam() { return exam; }

    public void setExam(Exam exam) { this.exam = exam; }

    public Question getQuestion() { return question; }

    public void setQuestion(Question question) { this.question = question; }

    public interface IdJsonView {}
    public interface StuAnswerJsonView {}
    public interface CorrectAnswerJsonView {}
    public interface ScoreJsonView {}
    public interface PointsJsonView {}
    public interface StudentJsonView extends
            Student.IdJsonView,
            Student.NameJsonView
    {}
    public interface ExamJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView,
            Exam.QuestionCountJsonView
    {}
    public interface QuestionJsonView extends
            Question.IdJsonView,
            Question.StemJsonView,
            Question.OptionsJsonView,
            Question.AnswerJsonView
    {}
}
