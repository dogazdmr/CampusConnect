import { useState } from 'react';

import { InputTextarea } from 'primereact/inputtextarea';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';

import { MultiSelect } from 'primereact/multiselect';
 
import { SelectButton } from 'primereact/selectbutton';


export default function AddSecondHand({ onClose }) {
    const [secondHandListing, setSecondHandListing] = useState({
        clubName: '',
        description: ''
    });
    const [value1, setValue1] = useState(null);

    const handleChange = (e) => {
        setSecondHandListing({ ...secondHandListing, [e.target.name]: e.target.value });
    };

    const [negotiabale, setNegotiable] = useState('Negotiable');
    const options = ['Negotiable', 'Non-Negotiable'];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const productTypes = [
        { name: 'Book', code: 'NY' },
        { name: 'Electronic', code: 'RM' },
        { name: 'Furniture', code: 'LDN' }
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/second-hand/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(secondHandListing)
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
        <div className="modal round" style={{ backgroundColor: "lavender" }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form onSubmit={handleSubmit}>
                    <InputText
                        type="text"
                        name="clubName"
                        value={secondHandListing.productName}
                        onChange={handleChange}
                        placeholder="Product Name"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="clubName"
                        value={secondHandListing.price}
                        onChange={handleChange}
                        placeholder="Price"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputTextarea
                        name="description"
                        value={secondHandListing.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ width: '400px', height: '300px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <MultiSelect className="mb-4 ml-4" value={selectedProduct} options={productTypes} onChange={(e) => setSelectedProduct(e.value)} optionLabel="name" placeholder="Select a Product Type" maxSelectedLabels={1} />
                    <br />
                    <p className="mb-4 ml-4">Condition: {value1}</p>
                    <Slider
                        value={value1}
                        onChange={(e) => setValue1(e.value)}
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                        max={10}
                    />
                    <br />
                    <SelectButton
                        value={negotiabale}
                        options={options}
                        onChange={(e) => setNegotiable(e.value)}
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <Button
                        type="submit"
                        className="mb-4 ml-4"
                        style={{ backgroundColor: "indigo" }}
                    >
                        Add Second Hand Listing</Button>
                </form>
                <p>This is the donation form content.</p>
            </div>
        </div>
    );
}


