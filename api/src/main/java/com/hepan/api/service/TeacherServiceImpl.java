package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.entity.User;
import com.hepan.api.repository.TeacherRepository;
import com.hepan.api.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {
    private TeacherRepository teacherRepository;
    private UserService userService;
    private UserRepository userRepository;
    TeacherServiceImpl(TeacherRepository teacherRepository,
                       UserService userService,
                       UserRepository userRepository) {
        this.teacherRepository = teacherRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @Override
    public Teacher save(Teacher teacher) {
        User user = this.userService.saveByTeacher(teacher);
        teacher.setUser(user);
        return this.teacherRepository.save(teacher);
    }

    @Override
    public Page<Teacher> page(String name, String phone, Pageable pageable) {
        return this.teacherRepository.findAllByNameAndPhone(name, phone, pageable);
    }

    @Override
    public void deleteById(Long id) {
        Teacher teacher = this.getById(id);
        User user = teacher.getUser();
        this.teacherRepository.deleteById(id);
        this.userRepository.delete(user);
    }

    @Override
    public Teacher getById(Long id) {
        return this.teacherRepository.findById(id).get();
    }
}
