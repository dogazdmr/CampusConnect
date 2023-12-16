import { useState } from 'react';

import { InputTextarea } from 'primereact/inputtextarea';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export default function EditProfile({ onClose }) {
    const [club, setClub] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        setClub({ ...club, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/club/1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(club)
            });

            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error editing Club Profile:', error);
            // Optionally, provide user feedback
        }
    };
    
    return (
        <div className="modal round" style={{backgroundColor: "lavender"}}>
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
            <InputText
                type="text" 
                name="clubName" 
                value={club.name} 
                onChange={handleChange} 
                placeholder="Club Name"
                style={{ width: '400px'}}
                className="mb-4 ml-4"
            />
            <br/>
            <InputTextarea 
                name="description" 
                value={club.description} 
                onChange={handleChange} 
                placeholder="Description"
                style={{ width: '400px', height:'300px'}}
                className="mb-4 ml-4"
            />
            <Button type="submit" style={{backgroundColor: "indigo"}}>Save Changes</Button>
        </form>
            <p>This is the donation form content.</p>
          </div>
        </div>
      );
    
    /* return (
        <div>
            <h2>Edit Club Profile</h2>
        </div>
    ); */
}