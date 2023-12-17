import React, { useState, useEffect } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Existing code to fetch messages...
  }, []);

  const [sentText, setSentText] = useState({
    message_from: '',
    message_to: '',
    message_text: ''
  });
  
  const handleChange = (e) => {
    setSentText({ ...sentText, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending message:", sentText); // Debugging line

    try {
        const response = await fetch('http://localhost:8080/api/messages/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sentText)
        });

        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }

        const result = await response.json();
        console.log("Response received:", result); // Debugging line

        // Refresh messages list or reset form as needed
    } catch (error) {
        console.error('Error adding message:', error);
        // Display error to user
    }
};

  return (
    <div>
      <h2>Messages</h2>
      {/* Existing code to display messages... */}
      <div className="modal round" style={{backgroundColor: "lavender"}}>
        <div className="modal-content">
          <span className="close">&times;</span>
          <form onSubmit={handleSubmit}>
            <InputText
              type="text" 
              name="message_from" 
              value={sentText.message_from} 
              onChange={handleChange} 
              placeholder="From"
              style={{ width: '400px'}}
              className="mb-4 ml-4"
            />
            <br/>
            <InputText
              type="text" 
              name="message_to" 
              value={sentText.message_to} 
              onChange={handleChange} 
              placeholder="To"
              style={{ width: '400px'}}
              className="mb-4 ml-4"
            />
            <br/>
            <InputTextarea 
              name="message_text" 
              value={sentText.message_text} 
              onChange={handleChange} 
              placeholder="Message Text"
              style={{ width: '400px', height:'300px'}}
              className="mb-4 ml-4"
            />
            <Button type="submit" style={{backgroundColor: "indigo"}}>Send Message</Button>
          </form>
          <p>This is the message form content.</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;