package com.hepan.api.service;

import com.hepan.api.entity.Clazz;
import com.hepan.api.repository.ClazzRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClazzServiceImpl implements ClazzService {
    private ClazzRepository clazzRepository;
    ClazzServiceImpl(ClazzRepository clazzRepository) {
        this.clazzRepository = clazzRepository;
    }

    @Override
    public Page<Clazz> page(String name, Pageable pageable) {
        return this.clazzRepository.findAllByName(name, pageable);
    }

    @Override
    public Clazz save(Clazz clazz) {
        return this.clazzRepository.save(clazz);
    }

    @Override
    public void deleteById(Long id) {
        this.clazzRepository.deleteById(id);
    }

    @Override
    public Iterable<Clazz> getAll() {
        return this.clazzRepository.findAll();
    }
}
