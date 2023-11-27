package com.hepan.api.entity;

import jakarta.persistence.*;

@Entity
public class User {
    public static String DEFAULT_PASSWORD = "hebut.edu";
    public static Long USER_ADMIN_ROLE = 0L;
    public static Long USER_TEACHER_ROLE = 1L;
    public static Long USER_STUDENT_ROLE = 2L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;
    private Long role;

    @OneToOne( mappedBy = "user")
    private Student student;

    @OneToOne( mappedBy = "user")
    private Teacher teacher;

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
}
