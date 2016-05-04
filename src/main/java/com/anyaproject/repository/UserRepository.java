package com.anyaproject.repository;

import org.springframework.data.repository.CrudRepository;

import com.anyaproject.entity.User;

public interface UserRepository extends CrudRepository<User, Long>{

}
