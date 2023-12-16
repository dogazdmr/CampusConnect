import { useState } from 'react';
export default function DonationForm({ onClose }) {
    /* console.log("DOnationsssss")
    return (
      <div>
        <p>This is donation form.</p>
      </div>
    ); */
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
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
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