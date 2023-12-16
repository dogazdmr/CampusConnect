import React, { useState, useEffect } from 'react';
//import { classNames } from 'primereact/utils';
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

export default function SecondHand(){

    const navigate = useNavigate();
    //const [selected, setSelected] = useState(-1)
    const [items, setItems] = useState(null);
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'price': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        'sellerRating': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.GTE }] },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [loading, setLoading] = useState(true);

    //const initialItems = jsonData
    const initialItems = [
        { id: 1, productName: "Laptop", price: 800, image: 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', sellerRating: 4.5 },
        { id: 2, name: "Smartphone", price: 500, image: 'smartphone.jpg', sellerRating: 4.2 },
        { id: 3, name: "Camera", price: 1200, image: 'camera.jpg', sellerRating: 3.8 },
        { id: 4, name: "Programming Languages Book", price: 800, course: "CS319" , image: 'laptop.jpg', sellerRating: 4.5 },
        { id: 5, name: "Digital Design Book", price: 1500, course: "CS223/CS224" , image: 'smartphone.jpg', sellerRating: 4.2 },
        { id: 6, name: "Linear Algebra Book", price: 1200, course: "MATH225", image: 'camera.jpg', sellerRating: 3.8 },
        // Add more items as needed
    ];

    useEffect(() => {
        setItems(initialItems);
        setLoading(false);
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

    const initFilters = () => {
        setFilters({
            'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
            'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'price': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            'sellerRating': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.GTE }] },
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
                style={{ fontSize: '16px', borderRadius: '8px'}}/>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

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

    const priceBodyTemplate = (rowData) => {
        return `$${rowData.price}`;
    };

    const sellerRatingBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <i className="pi pi-star" style={{ color: 'gold' }}></i>
                <span className="ml-2">{rowData.sellerRating}</span>
            </React.Fragment>
        );
    };

    const sellerRatingFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="decimal" />;
    };

    const header = renderHeader();

    return (
        <div className="second-hand-sales-page">
            <div className="card">
                <h5>Filter Menu</h5>
                <p>Filters are displayed in an overlay.</p>
                <DataTable
                    value={items}
                    paginator
                    className="p-datatable-items"
                    //style={{backgroundColor: "blue"}}
                    showGridlines
                    rows={10}
                    dataKey="id"
                    filters={filters}
                    filterDisplay="menu"
                    selectionMode='single'
                    //selection={items[selected]}
                    onSelectionChange={(e) => {
                            const value = e.value
                            handleItemClick(value.id)
                        }}
                    loading={loading}
                    responsiveLayout="scroll"
                    globalFilterFields={['name', 'price', 'sellerRating']}
                    header={header}
                    emptyMessage="No items found."
                >
                    <Column
                        field="name"
                        header="Item Name"
                        filter
                        filterPlaceholder="Search by name"
                        style={{ minWidth: '12rem' }}
                        body={nameBodyTemplate}
                    />
                    <Column
                    field="image"
                    header="Image"
                    body={(rowData) => (
                        <img
                        src={rowData.image}
                        alt={rowData.name}
                        style={{ width: '100px', height: '100px'}}//, borderRadius: '50%' 
                        />
                    )}
                    filter
                    filterField='Filter'
                    filterPlaceholder="Search by image"
                    style={{ minWidth: '6rem' }}
                    />
                    <Column
                        field="price"
                        header="Price"
                        filter
                        filterPlaceholder="Search by price"
                        style={{ minWidth: '12rem' }}
                        body={priceBodyTemplate}
                    />
                    <Column
                        field="sellerRating"
                        header="Seller Rating"
                        filter
                        filterElement={sellerRatingFilterTemplate}
                        style={{ minWidth: '12rem' }}
                        body={sellerRatingBodyTemplate}
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
