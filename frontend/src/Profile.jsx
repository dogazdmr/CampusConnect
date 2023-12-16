import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
//////////////////////////////////////////////////
// Import necessary React and PrimeReact components
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
import AddSecondHand from './AddSecondHand';
import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';

export default function Profile() {

    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <h1>Your Profile</h1>
            <ProfileLayout/>
            <Button icon="pi pi-plus"
                className="absolute right-0 p-button-rounded p-button-info p-button-text"
                aria-label="Add Donation"
                onClick={handleAddClick} />

            {showModal && <AddSecondHand onClose={handleCloseModal} />}
        </div>
    );
}

function ProfileLayout() {
    return (
        <div>
            {/* You can customize the layout as needed for the Club Home page */}
            <nav>
                <Button className="ml-3 text-color surface-300">
                    <Link to=".">Club Home</Link>
                </Button>
                <Button className="ml-3 text-color surface-300">
                    <Link to="/club-home/edit-profile">Edit Club Profile</Link>
                </Button>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

/*     const [donations, setDonations] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
        // State to store the list of donations
        const [donations, setDonations] = useState([]);
        // State to store the search term
        const [searchTerm, setSearchTerm] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/api/donations/');
            if (!response.ok) {
              throw new Error('HTTP error! Status: ${response.status}');
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
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error fetching data: {error.message}</p>;
      }
    
      // Function to handle search
      const handleSearch = async () => {
        try {
          const response = await fetch(`/api/donations/search/${searchTerm}`);
          const data = await response.json();
          setDonations(data);
        } catch (error) {
          console.error('Error searching donations:', error);
        }
      }; */

/////////////////////////////////////////////////////////////////////////////////

/*return (
     <div className="p-grid p-fluid">
        <div className="p-col-12">
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
                    //className="flex"
                />
            </Fieldset>
        </div>
    </div> 
);*/
