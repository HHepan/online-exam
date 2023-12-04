package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

@Entity
public class QuestionBank {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

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

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface CourseJsonView extends
            Course.IdJsonView,
            Course.NameJsonView
    {}
}
