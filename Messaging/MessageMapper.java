package com.burakefeogut.models;

import org.springframework.jdbc.core.RowMapper;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MessageMapper implements RowMapper<MessageModel> {
    @Override
    public MessageModel mapRow(ResultSet rs, int rowNum) throws SQLException {
        int id = rs.getInt("id");
        String messageText = rs.getString("message_text");
        Timestamp timestamp = rs.getTimestamp("created_datetime");
        LocalDateTime createdDateTime = (timestamp != null) ? timestamp.toLocalDateTime() : null;
        int messageFrom = rs.getInt("message_from");
        int messageTo = rs.getInt("message_to");

        return new MessageModel(id, messageText, createdDateTime, messageFrom, messageTo);
    }
}
