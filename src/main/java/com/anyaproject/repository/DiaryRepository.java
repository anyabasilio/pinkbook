package com.anyaproject.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.anyaproject.entity.Diary;

public interface DiaryRepository extends PagingAndSortingRepository<Diary, Long> {

}
