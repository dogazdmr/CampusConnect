import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';

export default function MessageForm() {
    const [message, setMessage] = useState({
        id: null,
        message_text: '',
        created_datetime: new Date(),
        message_from: '',
        message_to: ''
    });

    const handleChange = (e) => {
      console.log(e.target.name)
        if (e.target.name === 'created_datetime') {
            setMessage({ ...message, created_datetime: e.value });
        } else {
            setMessage({ ...message, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ ...message, created_datetime: new Date() });
        try {
            const response = await fetch('http://localhost:8080/api/messages/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
        } catch (error) {
            console.error('Error handling message:', error);
        }
    };

    return (
        <div className="modal round" style={{backgroundColor: "lavender"}}>
          <div className="modal-content"> Messaging Seller
            
            <form onSubmit={handleSubmit}>
                <InputText
                    type="text"
                    name="message_text"
                    value={message.message_text}
                    onChange={handleChange}
                    placeholder="Message Text"
                    style={{ width: '400px' }}
                    className="mb-4 ml-4 mt-3"
                />
                {/* <br/>
                <Calendar
                    name="created_datetime"
                    value={message.created_datetime}
                    onChange={handleChange}
                    placeholder="Created Date and Time"
                    showTime
                    className="mb-4 ml-4"
                /> */}
                <br/>
                
               {/*  <InputText
                    type="text"
                    name="message_to"
                    value={message.message_to}
                    onChange={handleChange}
                    placeholder="Message To"
                    style={{ width: '400px' }}
                    className="mb-4 ml-4"
                /> */}
                <Button type="submit" style={{backgroundColor: "indigo"}}>Handle Message</Button>
            </form>
            <p>This is the message form content.</p>
          </div>
        </div>
    );
}