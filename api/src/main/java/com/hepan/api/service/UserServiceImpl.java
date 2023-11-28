package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.User;
import com.hepan.api.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveByStudent(Student student) {
        User user = new User();
        user.setUsername(student.getSno());
        user.setPassword(User.DEFAULT_PASSWORD);
        user.setRole(User.USER_STUDENT_ROLE);
        return this.userRepository.save(user);
    }

    @Override
    public User login(User user) {
        return null;
    }
}
