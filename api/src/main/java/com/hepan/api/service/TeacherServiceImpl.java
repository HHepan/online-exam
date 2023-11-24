package com.hepan.api.service;

import com.hepan.api.entity.Teacher;
import com.hepan.api.repository.TeacherRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TeacherServiceImpl implements TeacherService {
    private TeacherRepository teacherRepository;
    TeacherServiceImpl(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public Teacher save(Teacher teacher) {
        return this.teacherRepository.save(teacher);
    }

    @Override
    public Page<Teacher> page(String name, String phone, Pageable pageable) {
        return this.teacherRepository.findAllByNameAndPhone(name, phone, pageable);
    }

    @Override
    public void deleteById(Long id) {
        this.teacherRepository.deleteById(id);
    }
}
