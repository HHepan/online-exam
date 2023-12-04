package com.hepan.api.repository;

import com.hepan.api.entity.User;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long>, CrudRepository<User, Long>, JpaSpecificationExecutor<User> {
    User findByUsername(String username);
}
