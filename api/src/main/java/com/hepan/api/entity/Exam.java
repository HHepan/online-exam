package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Exam {
    public static Long EXAM_UNPUBLISHED = 0L;
    public static Long EXAM_NOT_START = 1L;
    public static Long EXAM_ING = 2L;
    public static Long EXAM_OVER = 3L;

    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @JsonView(QuestionCountJsonView.class)
    private Long questionCount;

    @JsonView(ScoreJsonView.class)
    private Long score;

    @JsonView(StartTimeJsonView.class)
    private Long startTime;

    @JsonView(EndTimeJsonView.class)
    private Long endTime;

    @JsonView(StateJsonView.class)
    private Long state;

    @ManyToOne
    @JsonView(UserJsonView.class)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany()
    @JsonView(ClazzesJsonView.class)
    private List<Clazz> clazzes = new ArrayList<>();

    @ManyToMany()
    @JsonView(QuestionsJsonView.class)
    private List<Question> questions = new ArrayList<>();

    @OneToMany( mappedBy = "exam" )
    @JsonView(AnswerStatusJsonView.class)
    private List<AnswerStatus> answerStatuses;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Long getQuestionCount() { return questionCount; }

    public void setQuestionCount(Long questionCount) { this.questionCount = questionCount; }

    public Long getScore() { return score; }

    public void setScore(Long score) { this.score = score; }

    public Long getStartTime() { return startTime; }

    public void setStartTime(Long startTime) { this.startTime = startTime; }

    public Long getEndTime() { return endTime; }

    public void setEndTime(Long endTime) { this.endTime = endTime; }

    public Long getState() { return state; }

    public void setState(Long state) { this.state = state; }

    public User getUser() { return user; }

    public void setUser(User user) { this.user = user; }

    public List<Question> getQuestions() { return questions; }

    public void setQuestions(List<Question> questions) { this.questions = questions; }

    public List<Clazz> getClazzes() { return clazzes; }

    public void setClazzes(List<Clazz> clazzes) { this.clazzes = clazzes; }

    public List<AnswerStatus> getAnswerStatuses() {
        return answerStatuses;
    }

    public void setAnswerStatuses(List<AnswerStatus> answerStatuses) {
        this.answerStatuses = answerStatuses;
    }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface QuestionCountJsonView {}
    public interface ScoreJsonView {}
    public interface StartTimeJsonView {}
    public interface EndTimeJsonView {}
    public interface StateJsonView {}
    public interface AnswerStatusJsonView {}
    public interface UserJsonView extends
            User.IdJsonView,
            User.UsernameJsonView
    {}
    public interface ClazzesJsonView extends
            Clazz.IdJsonView,
            Clazz.NameJsonView
    {}

    public interface QuestionsJsonView extends
            Question.IdJsonView,
            Question.StemJsonView,
            Question.OptionsJsonView,
            Question.AnswerJsonView,
            Question.QuestionBankJsonView
    {}
}
