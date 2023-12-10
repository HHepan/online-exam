package com.hepan.api.service;

import com.hepan.api.entity.Student;
import com.hepan.api.entity.Teacher;
import com.hepan.api.entity.User;
import com.hepan.api.repository.StudentRepository;
import com.hepan.api.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;
    private UserRepository userRepository;
    private UserService userService;
    StudentServiceImpl(StudentRepository studentRepository,
                       UserRepository userRepository,
                       UserService userService) {
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @Override
    public Student save(Student student) {
        User user = this.userService.saveByStudent(student);
        student.setUser(user);
        return this.studentRepository.save(student);
    }

    @Override
    public Page<Student> page(String name, String sno, Pageable pageable) {
        return this.studentRepository.findAllByNameAndSno(name, sno, pageable);
    }

    @Override
    public Student getById(Long id) {
        return this.studentRepository.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        Student student = this.getById(id);
        User user = student.getUser();
        this.studentRepository.deleteById(id);
        this.userRepository.delete(user);
    }

    @Override
    public Page<Student> pageByClazzIds(List<Long> clazzIds, Pageable pageable) {
        return this.studentRepository.findAllByClazzIds(clazzIds, pageable);
    }
}
