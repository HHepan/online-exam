package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Clazz {
    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(NameJsonView.class)
    private String name;

    @OneToMany(mappedBy = "clazz")
    @JsonView(StudentsJsonView.class)
    private List<Student> students = new ArrayList<>();

    @ManyToMany()
    @JsonView(ExamsJsonView.class)
    private List<Exam> exams = new ArrayList<>();

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }

    public interface IdJsonView {}
    public interface NameJsonView {}
    public interface StudentsJsonView {}
    public interface ExamsJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView
    {}
}
