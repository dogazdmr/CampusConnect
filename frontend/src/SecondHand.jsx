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
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);


    //const initialItems = jsonData
    const initialItems = [
        { id: 1, name: "Laptop", price: 800, description: "yeme de yanında yat LALALLALAL uzun bi sey yazınca noluyo ona bakıyorum teşekkürler", image: 'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true', conditionOfProduct: 4.5, negotiable: false },
        { id: 2, name: "Smartphone", price: 500, description: "yeme de yanında yat", image: '', conditionOfProduct: 6.9, negotiable: false },
        { id: 3, name: "Camera", price: 1200, image: '', sellerRating: 3.8 },
        { id: 4, name: "Programming Languages Book", price: 800, course: "CS319", image: '', sellerRating: 4.5 },
        { id: 5, name: "Digital Design Book", price: 1500, course: "CS223/CS224", image: '', sellerRating: 4.2 },
        { id: 6, name: "Linear Algebra Book", price: 1200, course: "MATH225", image: '', sellerRating: 3.8 },
        // Add more items as needed
    ];

    useEffect(() => {
        setItems2(initialItems);
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
                <DataTable value={initialItems} paginator className="p-datatable-customers" rows={10}
                    dataKey="id" filters={filters2} filterDisplay="row" loading={loading2} responsiveLayout="scroll"
                    globalFilterFields={['name', 'price', 'description', 'conditionOfProduct', 'negotiable']} header={header2} emptyMessage="No customers found.">
                    <Column field="name" header="Name" filter filterPlaceholder="Search" style={{ minWidth: '15rem' }} />
                    <Column 
                        header="Photo" 
                        field = "image" 
                        body={(rowData)=>(
                            <img
                            src = {rowData.image}
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
