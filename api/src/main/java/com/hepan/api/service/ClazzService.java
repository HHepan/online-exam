package com.hepan.api.service;


import com.hepan.api.entity.Clazz;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ClazzService {
    Page<Clazz> page(String name, Pageable pageable);

    Clazz save(Clazz clazz);

    void deleteById(Long id);

    Iterable<Clazz> getAll();
}
