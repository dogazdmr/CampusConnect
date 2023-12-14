import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
//////////////////////////////////////////////////
   // Import necessary React and PrimeReact components
   import { Button } from 'primereact/button';
   import { InputText } from 'primereact/inputtext';
   import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
   import { Divider } from 'primereact/divider';
   import { Fieldset } from 'primereact/fieldset';

export default function Donations() {

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

  const initialDonations = [
    { id: 1, clubName: "TDM", sdate: '15 September 2023', edate: '19 December 2023', items: ['Books', 'Pencils', 'idk'], location: 'A-Z27' },
    { id: 2, clubName: "Club 1", sdate: '18 October 2023', edate: '20 December 2023', items: ['attention'], location: 'B-Z08' },
    { id: 3, clubName: "Club 2", sdate: '30 October 2023', edate: '27 December 2023', location: 'G-135' },
    { id: 4, clubName: "Club 3", sdate: '15 September 2023', edate: '19 December 2023', items: ['something', 'something', 'something'], location: 'A-Z27' },
    { id: 5, clubName: "Club 4", sdate: '18 October 2023', edate: '20 December 2023', items: ['something', 'something', 'something'], location: 'B-Z08' },
    { id: 6, clubName: "Club 5", sdate: '30 October 2023', edate: '27 December 2023', items: ['something', 'something', 'something'], location: 'G-135' },
  ]

  const [donations, setDonations] = useState(initialDonations);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
        // If search term is empty, reset to the initial full list
        setDonations(initialDonations);
      } else {
        // Filter donations based on the entered search term
        const filteredDonations = initialDonations.filter((donation) =>
          donation.clubName.includes(searchTerm)
        );
        setDonations(filteredDonations);
      }
  };

  const itemTemplate = (donation) => {
    return (
      <div className="p-col-12 p-md-4">
        <Card title={`${donation.clubName}`} style={{height: '400px'}}>
          <p>Start Date: {donation.sdate}</p>
          <p>End Date: {donation.edate}</p>
          <p>Location: {donation.location}</p>
          <p>
            Accepting:
            <ul>
              {donation.items &&
                donation.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </p>
          {/* <Button
            label="View Details"
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