import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataView } from 'primereact/dataview';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
// Uncomment the following line if you are using routing
// import { useNavigate } from 'react-router-dom';
import DonationForm from './DonationForm';

export default function Donations() {
    // Uncomment the following line if you are using routing
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [donations, setDonations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/donations/');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setDonations(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/donations/search/${searchTerm}`);
            const data = await response.json();
            setDonations(data);
        } catch (error) {
            console.error('Error searching donations:', error);
        }
    };

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const itemTemplate = (donation) => {
        return (
            <div className="p-col-12 p-md-4">
                <Card title={`${donation.clubName}`} style={{ height: '400px', width: '350px' }} className="m-3">
                    <p>Details: {donation.description}</p>
                    {/* <p>End Date: {donation.edate}</p>
                    <p>Location: {donation.location}</p>
                    <p>Accepting:</p>
                    <ul>
                        {donation.items && donation.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul> */}
                </Card>
            </div>
        );
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12">
                <div>
                    <h2>Donations Page</h2>
                    <Button label="Add Donation" onClick={handleAddClick} />

                    {showModal && <DonationForm onClose={handleCloseModal} />}
                </div>
                <Fieldset legend="Donations">
                    <div className="p-d-flex p-ai-center p-jc-between">
                        <InputText
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
                    </div>
                    <Divider />
                    <DataView
                        value={donations}
                        layout="grid"
                        itemTemplate={itemTemplate}
                        paginator
                        paginatorPosition="both"
                        rows={6}
                    />
                </Fieldset>
            </div>
        </div>
    );
}
