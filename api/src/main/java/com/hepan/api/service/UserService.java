package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.User;

public interface UserService {
    User saveByStudent(Student student);

    User login(User user);
}
