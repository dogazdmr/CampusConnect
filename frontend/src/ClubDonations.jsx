import { Card } from 'primereact/card';
import React, { useState, useEffect } from 'react';

const ClubDonations= () => {
    const [donations, setDonations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDonations = async () => {
            // Retrieve clubId from local storage
            const clubId = localStorage.getItem('clubId');

            if (!clubId) {
                setError('No club ID found');
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/donations/${clubId}');
                if (!response.ok) {
                    throw new Error('HTTP error! status: ${response.status}');
                }
                const donationsData = await response.json();
                setDonations(donationsData);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchDonations();
    }, []);

    

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading donations: {error}</div>;

    return (
        <div>
            <h2>Donations for Club {localStorage.getItem('clubId')}</h2>
            
            <ul>
            
                {donations.map(donation => (
                    <li key={donation.donationId}>
                    <div>
                        <Card>
                        <strong>Club Name:</strong> {donation.clubName}<br />
                        <strong>Description:</strong> {donation.description}
                        </Card>
                        </div>
                    </li>
                    
                    
                ))}
                
            </ul>
            
        </div>
    );
};

export default ClubDonations;/* import React, { useState, useEffect } from 'react';

const ClubDonations= ({ clubId }) => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const fetchDonations = async () => {
            const response = await fetch('http://localhost:8080/api/donations/${clubId}');
            if (response.ok) {
                const data = await response.json();
                setDonations(data);
            }
        };

        fetchDonations();
    }, [clubId]);

    return (
        <div>
            <h2>Donations</h2>
            <ul>
                {donations.map(donation => (
                    <li key={donation.id}>{donation.amount} - {donation.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default ClubDonations; */