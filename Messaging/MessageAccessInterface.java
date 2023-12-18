package com.burakefeogut.data;

import com.burakefeogut.models.MessageModel;
import com.burakefeogut.models.User;

import java.util.List;

public interface MessageAccessInterface {

    public List<MessageModel> getSentMessages(int id);
    public List<MessageModel> getReceivedMessages(int id);
    public List<MessageModel> getAllMessages(int id);
    public int noOfContacts(int id);
    public List<User> getAllContacts(int id);

}
