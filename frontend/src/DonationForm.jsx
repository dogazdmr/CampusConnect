import { useState } from 'react';

import { InputTextarea } from 'primereact/inputtextarea';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
 
 
export default function DonationForm({ onClose }) {
    const [donation, setDonation] = useState({
        clubName: '',
        description: ''
    });

    const handleChange = (e) => {
        setDonation({ ...donation, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/donations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(donation)
            });

            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error adding donation:', error);
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
                value={donation.clubName} 
                onChange={handleChange} 
                placeholder="Club Name"
                style={{ width: '400px'}}
                className="mb-4 ml-4"
            />
            <br/>
            <InputTextarea 
                name="description" 
                value={donation.description} 
                onChange={handleChange} 
                placeholder="Description"
                style={{ width: '400px', height:'300px'}}
                className="mb-4 ml-4"
            />
            <Button type="submit" style={{backgroundColor: "indigo"}}>Add Donation</Button>
        </form>
            <p>This is the donation form content.</p>
          </div>
        </div>
      );
}

/* import { useState } from 'react';

export default function DonationForm() {
    const [donation, setDonation] = useState({
        clubName: '',
        description: ''
    });

    const handleChange = (e) => {
        setDonation({ ...donation, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/donations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(donation)
            });

            if (!response.ok) {
                throw new Error(HTTP error! Status: ${response.status});
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error adding donation:', error);
            // Optionally, provide user feedback
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="clubName" 
                value={donation.clubName} 
                onChange={handleChange} 
                placeholder="Club Name"
            />
            <textarea 
                name="description" 
                value={donation.description} 
                onChange={handleChange} 
                placeholder="Description"
            />
            <button type="submit">Add Donation</button>
        </form>
    );
} */