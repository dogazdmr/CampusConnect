/* package com.burakefeogut.services;

import java.util.List;

import com.burakefeogut.models.MessageModel;

public interface MessageServiceInterface {
    public void test();

    public List<MessageModel> getMessages();
    public MessageModel getByUsers(int from, int to);
    public List<MessageModel> searchMessages(String searchTerm);
 
    public int addOne(MessageModel newClub);
 
    public boolean deleteOne(int id);
 
    public MessageModel updateOne(int idToUpdate, MessageModel updateClub);
 
    public void init();

    public void destroy();
}
 */
package com.burakefeogut.services;

import com.burakefeogut.models.MessageModel;
import com.burakefeogut.models.User;

import java.util.List;

public interface MessageServiceInterface {
    public List<MessageModel> getSentMessages(int id);
    public List<MessageModel> getReceivedMessages(int id);
    public List<MessageModel> getAllMessages(int id);
    public int noOfContacts(int id);
    public List<User> getAllContacts(int id);
}