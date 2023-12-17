import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
//////////////////////////////////////////////////
// Import necessary React and PrimeReact components
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Divider } from 'primereact/divider';
import { Fieldset } from 'primereact/fieldset';

export default function LostandFound() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lostItems, setLostItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  //const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/items/');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setLostItems(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 /*  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/items/search/${searchTerm}`);
      const data = await response.json();
      setLostItems(data);
    } catch (error) {
      console.error('Error searching donations:', error);
    }
  }; */

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const itemTemplate = (item) => {
    return (
      <div className="p-col-12 p-md-4">
        <Card title={`${item.itemName}`} style={{ height: '400px' }}>
          <p>Found on: {item.itemPlace}</p>
          <p>End Date: {item.edate}</p>
          <p>Location Found: {item.location}</p>
          <p>
            Details:
            <ul>
              {item.items &&
                item.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>
          {/* <Button
            label="Contact"
            icon="pi pi-info-circle"
            className="p-button-text"
          /> */}
        </Card>
      </div>
    );
  };

  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12">
        <Fieldset legend="Lost & Found">
          <p>After the listing duration is up the items will be delivered to Student Affairs</p>
          <div className="p-d-flex p-ai-center p-jc-between">
            <InputText
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button label="Search" icon="pi pi-search" //onClick={handleSearch} 
            />
          </div>
          <Divider />
          <DataView
            value={lostItems}
            layout="grid"
            itemTemplate={itemTemplate}
            paginator
            paginatorPosition="both"
            rows={3}
          />
        </Fieldset>
      </div>
    </div>
  );
}

  /* const initialLF = [
    { id: 1, itemName: "Pencil", sdate: '15 September 2023', location: 'A-Z27' },
    { id: 2, itemName: "Book", sdate: '18 October 2023', location: 'B-Z08' },
    { id: 3, itemName: "Necklace", sdate: '30 October 2023', location: 'G-135' },
    { id: 4, itemName: "Bag", sdate: '15 September 2023', items: ['something', 'something', 'something'], location: 'A-Z27' },
    { id: 5, itemName: "Pencil", sdate: '18 October 2023', items: ['something', 'something', 'something'], location: 'B-Z08' },
    { id: 6, itemName: "Book", sdate: '30 October 2023', items: ['something', 'something', 'something'], location: 'G-135' },
  ].map(item => ({
    ...item,
    edate: new Date(new Date(item.sdate).getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  })); */

  

  /* const handleSearch = () => {
    if (searchTerm.trim() === '') {
      // If search term is empty, reset to the initial full list
      setLFitems(initialLF);
    } else {
      // Filter donations based on the entered search term
      const filteredItems = initialLF.filter((item) =>
        item.itemName.includes(searchTerm)
      );
      setLFitems(filteredItems);
    }
  }; */

//////////////////////////////////////////////////////////

/* {data.stateExecutions.map((execution, index) => <div className="flex gap-3">
<RadioButton
    key={index}
    className="text-color flex flex-column gap-3 my-2"
    onChange={() => handleChange(index)}
    checked={selected === index} />
<label className="my-2">{(execution !== null) ?
    ('Execution ' + (index + 1).toString()) + " - " + execution.stateId
    : 'Execution ' + (index + 1).toString() + " - null"}
</label>
</div>
)} */



/*     return (
        <div>
        <h2>Donations</h2>
        <ul>
          {donations.map(donation => (
            <li key={donation.id}>
              {donation.title} - {donation.amount}
            </li>
          ))}
        </ul>
      </div>
        
    );
} */