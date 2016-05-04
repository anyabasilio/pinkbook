package com.anyaproject.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
public class Diary {

    private @Id @GeneratedValue Long id;
    private String content;
    private String title;
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(pattern = "yyyy/MM/dd hh:MM")
    private Date createdDate;
    private Integer userId;

    private Diary() {}

    public Diary(String title, String content, Date createdDate, Integer userId) {
        this.title = title;
        this.content = content;
        this.createdDate = createdDate;
        this.userId = userId;
    }

}
