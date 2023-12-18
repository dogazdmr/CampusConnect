import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function AddLostItem({ onClose }) {
    const [lostItem, setLostItem] = useState({
        itemId: 0,
        itemName: '',
        itemPlace: '',
        description: '',
        lostOrFound: false // Boolean value (false for found, true for lost)
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' || type === 'radio' ? checked : value;
    
        setLostItem((prevLostItem) => ({
            ...prevLostItem,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lostItem)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error adding lost item:', error);
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
                        name="itemName"
                        value={lostItem.itemName}
                        onChange={handleChange}
                        placeholder="Item Name"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="itemPlace"
                        value={lostItem.itemPlace}
                        onChange={handleChange}
                        placeholder="Item Place"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputTextarea
                        name="description"
                        value={lostItem.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ width: '400px', height: '300px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <div>
                        <label>
                            Lost:
                            <input
                                type="radio"
                                name="lostOrFound"
                                value="1"
                                checked={lostItem.lostOrFound}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Found:
                            <input
                                type="radio"
                                name="lostOrFound"
                                value="0"
                                checked={!lostItem.lostOrFound}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <br />
                    <Button type="submit" style={{ backgroundColor: 'indigo' }}>
                        Report Lost Item
                    </Button>
                </form>
                <p>This is the lost items form content.</p>
            </div>
        </div>
    );
}


/* import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function AddLostItem({ onClose }) {
    const [lostItem, setLostItem] = useState({
        itemId: null,
        itemName: '',
        itemPlace: '',
        description: '',
        lostOrFound: ''
    });

    const handleChange = (e) => {
        console.log(e.target.name);

        setLostItem({ ...lostItem, [e.target.name]: e.target.value });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lostItem)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result); // Process the response data as needed
            // Optionally, reset the form or provide user feedback
        } catch (error) {
            console.error('Error adding lost item:', error);
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
                        name="itemName"
                        value={lostItem.itemName}
                        onChange={handleChange}
                        placeholder="Item Name"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="itemPlace"
                        value={lostItem.itemPlace}
                        onChange={handleChange}
                        placeholder="Item Place"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputTextarea
                        name="description"
                        value={lostItem.description}
                        onChange={handleChange}
                        placeholder="Description"
                        style={{ width: '400px', height: '300px' }}
                        className="mb-4 ml-4"
                    />
                    <br />
                    <InputText
                        type="text"
                        name="lostOrFound"
                        value={lostItem.lostOrFound}
                        onChange={handleChange}
                        placeholder="Lost or Found"
                        style={{ width: '400px' }}
                        className="mb-4 ml-4"
                    />
                    <Button type="submit" style={{ backgroundColor: "indigo" }}>Report Lost Item</Button>
                </form>
                <p>This is the lost items form content.</p>
            </div>
        </div>
    );
}
 */