package com.hepan.api.entity;

import com.fasterxml.jackson.annotation.JsonView;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    public static String DEFAULT_PASSWORD = "hebut.edu";
    public static Long USER_ADMIN_ROLE = 0L;
    public static Long USER_TEACHER_ROLE = 1L;
    public static Long USER_STUDENT_ROLE = 2L;

    @Id
    @JsonView(IdJsonView.class)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonView(UsernameJsonView.class)
    private String username;

    @JsonView(PasswordJsonView.class)
    private String password;

    @JsonView(RoleJsonView.class)
    private Long role;

    @OneToOne( mappedBy = "user" )
    @JsonView(StudentJsonView.class)
    private Student student;

    @OneToOne( mappedBy = "user" )
    @JsonView(TeacherJsonView.class)
    private Teacher teacher;

    @OneToMany( mappedBy = "user" )
    @JsonView(ExamJsonView.class)
    private List<Exam> exams = new ArrayList<>();

    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }

    public void setPassword(String password) { this.password = password; }

    public Long getRole() { return role; }

    public void setRole(Long role) { this.role = role; }

    public Student getStudent() { return student; }

    public void setStudent(Student student) { this.student = student; }

    public Teacher getTeacher() { return teacher; }

    public void setTeacher(Teacher teacher) { this.teacher = teacher; }

    public List<Exam> getExam() { return exams; }

    public void setExam(List<Exam> exams) { this.exams = exams; }

    public interface IdJsonView {}
    public interface UsernameJsonView {}
    public interface PasswordJsonView {}
    public interface RoleJsonView {}
    public interface StudentJsonView extends
            Student.IdJsonView,
            Student.NameJsonView,
            Student.SnoJsonView,
            Student.ClazzJsonView
    {}
    public interface TeacherJsonView extends
            Teacher.IdJsonView,
            Teacher.NameJsonView,
            Teacher.PhoneJsonView
    {}

    public interface ExamJsonView extends
            Exam.IdJsonView,
            Exam.NameJsonView
    {}
}
