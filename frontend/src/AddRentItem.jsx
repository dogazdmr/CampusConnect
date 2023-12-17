import { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function AddRentItem({ onClose }) {
    const [sale, setSale] = useState({
        id: null,
        name: '',
        price: '',
        description: '',
        sellerId: null,
        photo: '', // Assuming a photo URL
        conditionOfProduct: '',
        isNegotiable: false,
        rentDat: null,
        productId: null
    });

    /* const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSale({ ...sale, [e.target.name]: value });
    }; */
    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setSale({
            ...sale,
            [e.target.name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/rentitems/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sale),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error adding sale:', error);
            // Optionally, provide user feedback
        }
    };

    return (
        <div className="modal round" style={{ backgroundColor: 'lavender' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form onSubmit={handleSubmit}>
                    <InputText
                        type="text"
                        name="name"
                        value={sale.name}
                        onChange={handleChange}
                        placeholder="Item Name"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="price"
                        value={sale.price}
                        onChange={handleChange}
                        placeholder="Price"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputTextarea
                        name="description"
                        value={sale.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ width: '400px', height: '300px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="photo"
                        value={sale.photo}
                        onChange={handleChange}
                        placeholder="Photo URL"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="condition"
                        value={sale.conditionOfProduct}
                        onChange={handleChange}
                        placeholder="Condition"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <div>
                        <label>
                            Negotiable:
                            <input
                                type="checkbox"
                                name="negotiable"
                                checked={sale.negotiable}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <Button type="submit" style={{ backgroundColor: 'indigo' }}>
                        Add Sale
                    </Button>
                </form>
                <p>This is the second-hand sale form content.</p>
            </div>
        </div>
    );
}
