import React, { useState, useEffect } from 'react';
import { Card } from 'primereact/card';
import DonationForm from './DonationForm';
import { Button } from 'primereact/button';

const ClubHome = () => {
    const [donations, setDonations] = useState([]);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const clubId = localStorage.getItem('clubId'); // Get clubId from session
        if (clubId) {
            fetch(`http://localhost:8080/api/donations/${clubId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP error! status: ${response.status}');
                    }
                    return response.json();
                })
                .then(data => {
                    setDonations(data);
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    setError('Failed to load donations.');
                });
        } else {
            setError('No club ID provided for fetching donations.');
        }
    }, []);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h2>Donations</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                    <h2>Donations Page</h2>
                    <Button label="Add Donation" onClick={handleAddClick} />

                    {showModal && <DonationForm onClose={handleCloseModal} />}
                </div>
            <div>
                
                {donations.map(donation => (
                    <div key={donation.id}>
                    <Card className="m-4">
                        <p>Description: {donation.description}</p>
                        <p>Club Name: {donation.clubName}</p>
                        {/* ...other donation details */}
                        </Card>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default ClubHome;/* import React, { useState, useEffect } from 'react';

const ClubHome = () => {
    const [donations, setDonations] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const clubId = localStorage.getItem('clubId'); // Change to localStorage
        console.log(clubId);
        if (clubId) {
            fetch(`http://localhost:8080/api/donations/${clubId}`) // Use template string correctly
                .then(response => {
                    if (!response.ok) {
                        throw new Error('HTTP error! status: ${response.status}'); // Use template string correctly
                    }
                    return response.json();
                })
                .then(data => {
                    setDonations(data);
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    setError('Failed to load donations.');
                });
        } else {
            setError('No club ID provided for fetching donations.');
        }
    }, []);

    return (
        <div>
            <h2>Donations</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                {donations.map(donation => (
                    <div key={donation.id}>
                        <p>Description: {donation.description}</p>
                        <p>Club Name: {donation.clubName}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubHome; */