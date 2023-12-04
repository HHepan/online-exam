package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.entity.User;

public interface UserService {
    User saveByStudent(Student student);

    User saveByTeacher(Teacher teacher);

    User login(User user);

    User getById(Long id);
}
