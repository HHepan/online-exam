package com.hepan.api.repository;

import com.hepan.api.entity.Student;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface StudentRepository  extends PagingAndSortingRepository<Student, Long>, CrudRepository<Student, Long>, JpaSpecificationExecutor<Student> {
}
