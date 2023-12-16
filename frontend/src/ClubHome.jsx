import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import { Button } from 'primereact/button';
import DonationForm from './DonationForm';
import { useState } from 'react';
function ClubHome() {

    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <h1>Club Home</h1>
            <ClubHomeLayout />
            <Button icon="pi pi-plus"
                className="absolute right-0 p-button-rounded p-button-info p-button-text"
                aria-label="Add Donation"
                onClick={handleAddClick} />

            {showModal && <DonationForm onClose={handleCloseModal} />}
        </div>
    );
}

function ClubHomeLayout() {
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



export default ClubHome;
