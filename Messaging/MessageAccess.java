package com.burakefeogut.data;

import com.burakefeogut.models.MessageMapper;
import com.burakefeogut.models.MessageModel;
import com.burakefeogut.models.User;
import com.burakefeogut.models.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Repository
public class MessageAccess implements MessageAccessInterface{
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public List<MessageModel> getSentMessages(int id) {
        String sql = "SELECT * FROM message  WHERE message.message_from = ?";
        return jdbcTemplate.query(sql, new MessageMapper(), id);
    }

    @Override
    public List<MessageModel> getReceivedMessages(int id) {
        String sql = "SELECT * FROM message  WHERE message.message_to = ?";
        return jdbcTemplate.query(sql, new MessageMapper(), id);
    }

    @Override
    public List<MessageModel> getAllMessages(int id) {
        String sql = "SELECT * FROM message WHERE message.message_to = ? OR message.message_from = ?";
            return jdbcTemplate.query(sql, new MessageMapper(), id, id);
    }

    @Override
    public int noOfContacts(int id) {
        return 0;

    }

    @Override
    public List<User> getAllContacts(int id) {
        // Use DISTINCT to avoid duplicate users in the query results
        String sql = "SELECT DISTINCT u.id, u.password, u.fullname, u.username " + 
                "FROM user u " + 
                "JOIN message m ON u.id = m.message_from " + 
                "WHERE m.message_to = ? ";

        List<User> sent = jdbcTemplate.query(sql, new UserMapper(), id);

        sql = "SELECT DISTINCT u.id, u.password, u.fullname, u.username " + 
                "FROM user u " + 
                "JOIN message m ON u.id = m.message_to " + 
                "WHERE m.message_from = ? ";

        List<User> received = jdbcTemplate.query(sql, new UserMapper(), id);

        List<com.burakefeogut.models.User> allContacts = new ArrayList<>();

        for (com.burakefeogut.models.User senders: sent) {
            if(senders.getId() != id)
            allContacts.add(senders);

        }

        for (com.burakefeogut.models.User receiver: received
             ) { boolean duplicate = false;
            for(com.burakefeogut.models.User contacts : allContacts){
            if (contacts.getId() == receiver.getId()){
                duplicate = true;
                break;
            }
            if (receiver.getId() == id){
            duplicate = true;
            break;
            }
            }
            if(!duplicate){
                allContacts.add(receiver);
            }

        }
        return allContacts;
    }

}
