package com.hepan.api.repository;

import com.hepan.api.entity.Teacher;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TeacherRepository extends PagingAndSortingRepository<Teacher, Long>, CrudRepository<Teacher, Long>, JpaSpecificationExecutor<Teacher> {
}
