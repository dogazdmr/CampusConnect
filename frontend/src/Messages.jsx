import React, { useState, useEffect } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast'; // Assuming you use PrimeReact Toast for notifications

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [sentText, setSentText] = useState({
    message_from: '',
    message_to: '',
    message_text: ''
  });
  const [error, setError] = useState(null); // State to hold any error message
  const toast = React.useRef(null); // Ref for toast notifications

  useEffect(() => {
    // Fetch messages when the component mounts or messages state changes
    fetchMessages();
  }, [messages]);

  const fetchMessages = async () => {
    // Implement the fetch logic to retrieve messages
  };

  const handleChange = (e) => {
    setSentText({ ...sentText, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before new submission

    try {
      const response = await fetch('http://localhost:8080/api/messages/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sentText)
      });

      if (!response.ok) {
        // Handle non-2xx HTTP responses
        throw new Error('HTTP error! Status: ${response.status}');
      }

      const result = await response.json();
      setMessages([...messages, result]); // Add the new message to the messages state
      setSentText({ message_from: '', message_to: '', message_text: '' }); // Clear the form

      toast.current.show({ severity: 'success', summary: 'Message Sent', detail: 'Your message has been sent successfully!', life: 3000 });

    } catch (error) {
      setError(error.message); // Set the error state with the error message
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to send message: ' + error.message, life: 5000 });
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <h2>Messages</h2>
      {/* Implement your logic to display messages... */}
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
            <Button type="submit" label="Send Message" className="p-button-success" />
          </form>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Messages;