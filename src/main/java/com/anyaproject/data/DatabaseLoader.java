package com.anyaproject.data;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.anyaproject.entity.Diary;
import com.anyaproject.entity.User;
import com.anyaproject.repository.DiaryRepository;
import com.anyaproject.repository.UserRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final DiaryRepository diaryRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository, DiaryRepository diaryRepository) {
        this.userRepository = userRepository;
        this.diaryRepository = diaryRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        String contents = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin.";
        this.userRepository.save(new User("Ronya", "Delos Reyes", "Basilio"));
        this.diaryRepository.save(new Diary("My fantasy land", contents, new Date(), 1));
        this.diaryRepository.save(new Diary("A sweet summer", contents, new Date(), 1));
    }
}
