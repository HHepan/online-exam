package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.entity.User;
import com.hepan.api.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Objects;


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
    public User saveByTeacher(Teacher teacher) {
        User user = new User();
        user.setUsername(teacher.getPhone());
        user.setPassword(User.DEFAULT_PASSWORD);
        user.setRole(User.USER_TEACHER_ROLE);
        return this.userRepository.save(user);
    }

    @Override
    public User login(User user) {
        User existUser = this.userRepository.findByUsername(user.getUsername());
        if (existUser != null) {
            if (Objects.equals(user.getPassword(), existUser.getPassword())) {
                return existUser;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public User getById(Long id) {
        return this.userRepository.findById(id).get();
    }
}
