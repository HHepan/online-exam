package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

@Entity
public class Student {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @JsonView(SnoJsonView.class)
    private String sno;

    @ManyToOne
    @JsonView(ClazzJsonView.class)
    @JoinColumn(name = "clazz_id")
    private Clazz clazz;

    @OneToOne()
    @JsonView(UserJsonView.class)
    private User user;

    @OneToOne( mappedBy = "student" )
    @JsonView(AnswerStatusJsonView.class)
    private AnswerStatus answerStatus;

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getSno() { return sno; }

    public void setSno(String sno) { this.sno = sno; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public AnswerStatus getAnswerStatus() {
        return answerStatus;
    }

    public void setAnswerStatus(AnswerStatus answerStatus) {
        this.answerStatus = answerStatus;
    }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface SnoJsonView {}
    public interface AnswerStatusJsonView {}
    public interface UserJsonView extends
            User.IdJsonView,
            User.UsernameJsonView,
            User.PasswordJsonView,
            User.RoleJsonView
    {}
    public interface ClazzJsonView extends Clazz.IdJsonView, Clazz.NameJsonView {}

}
