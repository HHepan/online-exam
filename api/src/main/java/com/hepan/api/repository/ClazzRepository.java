package com.hepan.api.repository;

import com.hepan.api.entity.Clazz;
import com.hepan.api.repository.specs.ClazzSpecs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ClazzRepository extends PagingAndSortingRepository<Clazz, Long>, CrudRepository<Clazz, Long>, JpaSpecificationExecutor<Clazz> {
    Iterable<Clazz> findAll();

    default Page<Clazz> findAllByName(String name, Pageable pageable) {
        Specification<Clazz> specification = ClazzSpecs.containingName(name);

        return this.findAll(specification, pageable);
    };
}
