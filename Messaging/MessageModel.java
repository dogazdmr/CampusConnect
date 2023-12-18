package com.burakefeogut.models;

import java.time.LocalDateTime;

public class MessageModel {
    int id;
    String message_text;
    LocalDateTime created_datetime;
    int message_from;
    int message_to;


    public MessageModel(int id, String message_text, LocalDateTime created_datetime, int message_from, int message_to) {
        this.id = id;
        this.message_text = message_text;
        this.created_datetime = created_datetime;
        this.message_from = message_from;
        this.message_to = message_to;
    }
    public String getMessage_text() {
        return message_text;
    }
    public void setMessage_text(String message_text) {
        this.message_text = message_text;
    }
    public LocalDateTime getCreated_datetime() {
        return created_datetime;
    }
    public void setCreated_datetime(LocalDateTime created_datetime) {
        this.created_datetime = created_datetime;
    }
    public int getMessage_from() {
        return message_from;
    }
    public void setMessage_from(int message_from) {
        this.message_from = message_from;
    }
    public int getMessage_to() {
        return message_to;
    }
    public void setMessage_to(int message_to) {
        this.message_to = message_to;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    
}

