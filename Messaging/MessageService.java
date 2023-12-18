/* package com.burakefeogut.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import java.util.Map;

import com.burakefeogut.data.MessagesAccessInterface;
import com.burakefeogut.models.MessageModel;


@Service
public class MessageService implements MessageServiceInterface{

    @Autowired
    MessagesAccessInterface messagesDAO;

    @Override
    public void test() {
        System.out.println("ItemsBusinessService is workin");
    }

    @Override
    public List<MessageModel> getMessages() {
        return messagesDAO.getMessages();
    }

    @Override
    public MessageModel getByUsers(int from, int to) {
        return messagesDAO.getByUsers( from,  to);
    }

    @Override
    public List<MessageModel> searchMessages(String searchTerm) {
       return messagesDAO.searchMessages(searchTerm);
    }

    @Override
    public int addOne(MessageModel newItem) {
       return messagesDAO.addOne(newItem);
    }

    @Override
    public boolean deleteOne(int itemId) {
       return messagesDAO.deleteOne(itemId);
    }

    @Override
    public MessageModel updateOne(int idToUpdate, MessageModel updateItem) {
       return messagesDAO.updateOne(idToUpdate, updateItem);
    }
    
    @Override
    public void init() {
        System.out.println("Init method of the Messages Business Service");
    }

    @Override
    public void destroy() {
       System.out.println("Destroy method of the Messages Business Service");
    }




}

 */

 package com.burakefeogut.services;

import com.burakefeogut.data.MessageAccessInterface;
import com.burakefeogut.models.MessageModel;
import com.burakefeogut.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService implements MessageServiceInterface{
    @Autowired
    MessageAccessInterface messageAccessInterface;

    public List<MessageModel> getSentMessages(int id){
        return messageAccessInterface.getSentMessages(id);
    }
    public List<MessageModel> getReceivedMessages(int id){
        return messageAccessInterface.getReceivedMessages(id);
    }

    public List<MessageModel> getAllMessages(int id){
        return messageAccessInterface.getAllMessages(id);
    }
    public int noOfContacts(int id){
        return 0;
    }

    public List<User> getAllContacts(int id) {
        return messageAccessInterface.getAllContacts(id);
    }

   




}
