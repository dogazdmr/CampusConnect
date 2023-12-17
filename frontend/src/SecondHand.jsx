import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import jsonData from '../data/data.json'
import { Outlet, Route, useNavigate, useParams } from 'react-router-dom';
import SecondHandItem from './SecondHandItem';
//import './DataTableDemo.css';

export default function SecondHand() {

    const navigate = useNavigate();
    //const [selected, setSelected] = useState(-1)
    const [items, setItems] = useState(null);
    const [items2, setItems2] = useState(null);
    const [filters, setFilters] = useState(null)
    const [filters2, setFilters2] = useState({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            'price': { operator: FilterOperator.EQUALS, value: null, matchMode: FilterMatchMode.EQUALS },
            'description': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            'conditionOfProduct': { operator: FilterOperator.EQUALS, value: null, matchMode: FilterMatchMode.EQUALS },
            'negotiable': { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [globalFilterValue2, setGlobalFilterValue2] = useState('');
    //const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);


    //const initialItems = jsonData
    //const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [rentItems, setRentItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/secondhand/');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setRentItems(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading2(false);
        }
    };
    fetchData();
}, []);

/* const handleSearch = async () => {
    try {
        const response = await fetch(`/api/rentitems/search/${searchTerm}`);
        const data = await response.json();
        setRentItems(data);
    } catch (error) {
        console.error('Error searching rent & borrowlistings:', error);
    }
}; */

    useEffect(() => {
        //setItems2(initialItems);
        setLoading2(false);
        initFilters();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const clearFilters = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const onGlobalFilterChange2 = (e) => {
        const value = e.target.value;
        let _filters2 = { ...filters2 };
        _filters2['global'].value = value;

        setFilters2(_filters2);
        setGlobalFilterValue2(value);
    }

    const initFilters = () => {
        setFilters({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            'price': { operator: FilterOperator.EQUALS, value: null, matchMode: FilterMatchMode.EQUALS },
            'description': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
            'conditionOfProduct': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.GTE }] },
            'negotiable': { value: null, matchMode: FilterMatchMode.EQUALS },
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button
                    type="button"
                    icon="pi pi-filter-slash"
                    label="Clear"
                    className="p-button-outlined"
                    onClick={clearFilters}
                    style={{ fontSize: '16px', borderRadius: '8px' }} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };
    const renderHeader2 = () => {
        return (
            <div className="flex justify-content-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue2} onChange={onGlobalFilterChange2} placeholder="Keyword Search" />
                </span>
            </div>
        )
    }

    const nameBodyTemplate = (rowData) => {
        return (
            <Button
                label={rowData.productName}
                className="text-black-alpha-90 border-none"
                onClick={() => handleItemClick(rowData.id)}  // Add this line for click handling
                icon="pi pi-arrow-right"
            />
        );
    };

    const handleItemClick = (id) => {
        //setSelected(itemId)
        // Navigate to the item's page using React Router or any other routing mechanism
        console.log(`Item clicked with ID: ${id}`);
        navigate(`/home/second-hand/second-hand-item`);//${id}
    };

    /*     function handleChange(itemId) {
            setSelected(itemId)
            
            console.log(`Item clicked with ID: ${itemId}`);
            navigate(`/home/second-hand/${itemId}`);
        } */


    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} className="p-button-secondary"></Button>;
    }

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} className="p-button-success"></Button>
    }

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center font-bold">Customized Buttons</div>;
    }

    const sellerRatingBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <i className="pi pi-star" style={{ color: 'gold' }}></i>
                <span className="ml-2">{rowData.conditionOfProduct}</span>

            </React.Fragment>
        );
    };

    const sellerRatingFilterTemplate = (options) => {
        return (
          <InputNumber
            value={options.value}
            onChange={(e) => options.filterCallback(e.value, options.index)}
            mode="decimal"
            step={0.1} // Set the step to 0.1 to allow 1 decimal place
          />
        );
      };


    const priceBodyTemplate = (rowData) => {
        return `₺${rowData.price}`;
    };
    const priceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="TRY" locale="tr-TR" />
    }

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.negotiable, 'false-icon pi-times-circle': !rowData.negotiable })}></i>;
    }

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />
    }

    const header = renderHeader();
    const header2 = renderHeader2();

    return (
        <div className="Second-Hand Items">
            <div className="card">
                <h3>Second-Hand Items</h3>
                <DataTable value={rentItems} paginator className="p-datatable-customers" rows={10}
                    dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
                    globalFilterFields={['name', 'price', 'description', 'conditionOfProduct', 'negotiable']} header={header2} emptyMessage="No items found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search" style={{ minWidth: '15rem' }} />
                    <Column 
                        header="Photo" 
                        field = "image" 
                        body={(rowData)=>(
                            <img
                            src = {rowData.photo}
                            alt={rowData.name}
                            style = {{width: '200px', height: 'auto'}}
                            />
                        )}
                        filterField="description" 
                        showFilterMenu={false} 
                        filterMenuStyle={{ width: '14rem' }} 
                        style={{ minWidth: '14rem' }} 
                    />
                    <Column header="Price" filterField="price" dataType="numeric" style={{ minWidth: '15rem' }} body={priceBodyTemplate} filter filterElement={priceFilterTemplate} />
                    <Column header="Description" field = "description" filterField="description" showFilterMenu={false} filterMenuStyle={{ width: '8rem' }} style={{ minWidth: '10rem' }} />
                    <Column field="conditionOfProduct" header="Condition" style={{ minWidth: '10rem' }}sortable></Column>
                    {/* <Column header="Condition" filterField="conditionOfProduct" dataType="numeric" style={{ minWidth: '10rem' }} body={sellerRatingBodyTemplate} filter filterElement={sellerRatingFilterTemplate} /> */}
                    <Column field="negotiable" header="Negotiability" dataType="boolean" style={{ minWidth: '10rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
                    <Column header="Contact" style={{ minWidth: '10rem' }}
                        body={
                        <Button
                            icon="pi pi-info-circle"
                            style={{ backgroundColor: 'green', color: 'white' }}
                            className="p-button-rounded p-button-secondary" 
                            aria-label="Bookmark"
                            //onClick={handleClick}
                        />
                    } 
                    />
                </DataTable>
            </div>
        </div>
    );
}

//export default SecondHandSalesPage;


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

/* const majors = [
    {name: 'Computer Engineering', code: 'CS', index:0},
    {name: 'Electrical Engineering', code: 'EEE', index: 1},
    {name: 'Mechanical Engineering', code: 'ME', index:2} 
];


//var selectedMajor = undefined
//const [selectedMajor, setSelectedMajor] = useState(-1)

//console.log(selectedMajor)

/* function handleMajorSelect(majorName){
    console.log(majorName)
    setSelectedMajor(majorName)
} 


return (
  <div>
    <p>This is the second hand sales page.</p>
    <MultiSelect 
        placeholder="Select a Major"
        //value={selectedMajor} 
        optionLabel="name" 
        optionValue="code" 
        options={majors} 
        /*onChange={(e) => {
            const major = e.name;
            handleMajorSelect(major);
        }}
        
    />
    
  </div>
); */
