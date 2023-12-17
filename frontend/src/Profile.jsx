import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
import { OrderList } from 'primereact/orderlist';
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
import ReactDOM from 'react-dom';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Profile() {

    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [customers1, setCustomers1] = useState([
      { name: 'laptop', image: { url: 'https://www.hpstore.com.tr/hp-laptop-15-fg5012nt-intel-core-i5-1235u-8gb-ram-256gb-ssd-intel-iris-xe-graphics-156-inc-fhd-freedos-gumus-6g0c1ea-13468-17-B.jpg' }, price:  "1000.99", status: 'Active' },
      // Add more data as needed
  ]);
  const [loading, setLoading] = useState(false);

    return (
        <div>
            <h1>My Profile</h1>
           
            <Button icon="pi pi-plus"
                className="absolute right-0 p-button-rounded p-button-info p-button-text"
                style={{ marginRight: '100px' }}
                label="Add Second-Hand Item"
                onClick={handleAddClick} />
              <Button icon="pi pi-plus"
                className="absolute right-0 p-button-rounded p-button-info p-button-text"
                style={{ marginRight: '357px' }}
                label="Add Rent&Borrow Item"
                onClick={handleAddClick} />
              <Button icon="pi pi-plus"
                className="absolute right-0 p-button-rounded p-button-info p-button-text"
                style={{ marginRight: '610px' }}
                label="Add Lost&Found Item"
                onClick={handleAddClick} />

            {showModal && <AddSecondHand onClose={handleCloseModal} />}

            <div className="datatable-scroll-demo pt-7">
                <div className="card">
                    <h2>Listed Second-Hand Items</h2>
                    <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column
                            field="image"
                            header="Image"
                            body={(rowData) => <img src={rowData.image.url} alt={rowData.name} style={{ width: '100px', height: 'auto' }} />}
                            style={{ minWidth: '200px' }}
                        ></Column>
                        <Column field="price" header="Price" style={{ minWidth: '200px' }}></Column>
                        <Column
                            body={(rowData) => (
                            <span>
                                <Button label="Delete" icon="pi pi-trash" onClick={() => console.log(rowData)}  style={{ backgroundColor: 'red', color: 'white' }}/>
                                
                            </span>
                            )}
                            style={{ minWidth: '100px' }}
                        ></Column>
                    </DataTable>
                </div>
            </div>
            <div className="datatable-scroll-demo pt-7">
                <div className="card">
                    <h2>Listed Rent & Borrow Items</h2>
                    <DataTable value={customers1} scrollable scrollHeight="400px" loading={loading}>
                        <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                        <Column
                            field="image"
                            header="Image"
                            body={(rowData) => <img src={rowData.image.url} alt={rowData.name} style={{ width: '100px', height: 'auto' }} />}
                            style={{ minWidth: '200px' }}
                        ></Column>
                        <Column field="price" header="Price" style={{ minWidth: '200px' }}></Column>
                        <Column
                            body={(rowData) => (
                            <span>
                                <Button label="Delete" icon="pi pi-trash" onClick={() => console.log(rowData)}  style={{ backgroundColor: 'red', color: 'white' }}/>
                                
                            </span>
                            )}
                            style={{ minWidth: '100px' }}
                        ></Column>
                    </DataTable>
                </div>
            </div>

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
