import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import { Button } from 'primereact/button';
import DonationForm from './DonationForm';
import { useState, useEffect } from 'react';
//import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { DataView } from 'primereact/dataview';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';
//import { useParams } from 'react-router-dom';
function ClubHome() {
    //const { id } = useParams()


    const [showModal, setShowModal] = useState(false);
    /* const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [club, setClub] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/club/search/gunkoy');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setClub(result);
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
    } */

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    

    return (
        <React.Fragment>
            <div>
                <h1>Club Name</h1>{/* {club.clubName} */}
                <ClubHomeLayout />
                <Button icon="pi pi-plus"
                    className="absolute right-0 p-button-rounded p-button-info p-button-text"
                    aria-label="Add Donation"
                    onClick={handleAddClick} />

                {showModal && <DonationForm onClose={handleCloseModal} />}
            </div>
            <div className="flex justify-content-center flex-wrap mt-4">
                <img src={
                'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true'
              }
              alt={'home'}
              style={{ width: '400px', height: '400px' }}
              className="center">
                     {/* {club.clubPhoto} */}
                </img>
            </div>
            <div className="flex justify-content-center flex-wrap mt-2" >
                <p className="text-2xl">
                    <i >Club Bio {/* {club.bio} */}</i>
                </p>
            </div>
            {/* <div className="p-grid p-fluid">
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
        </div> */}
        </React.Fragment>
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
