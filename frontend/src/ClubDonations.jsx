import React, { useState, useEffect } from 'react';

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

export default ClubDonations;