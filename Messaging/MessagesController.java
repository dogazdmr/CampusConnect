package com.burakefeogut.controllers;

import com.burakefeogut.data.MessageAccessInterface;
import com.burakefeogut.models.MessageModel;
import com.burakefeogut.models.User;
import com.burakefeogut.services.MessageServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessagesController {
    MessageServiceInterface service;

    @Autowired
    public MessagesController(MessageServiceInterface service){
        super();
        this.service = service;
    }

    @GetMapping("/")
    public List<MessageModel> showAllMessages(Model model){
        List<MessageModel> messageModels = service.getAllMessages(22101234);
        return messageModels;
    }

    @GetMapping("/sent")
    public List<MessageModel> showSentMessages(Model model){
        List<MessageModel> messageModels = service.getSentMessages(22101234);
        return messageModels;
    }

    @GetMapping("/received")
    public List<MessageModel> showReceivedMessages(Model model){
        List<MessageModel> messageModels = service.getReceivedMessages(22101234);
        return messageModels;
    }

    @GetMapping("/contacts")
    public List<User> showContacts(Model model){
        List<User> messageModels = service.getAllContacts(22101234);
        return messageModels;
    }





}
