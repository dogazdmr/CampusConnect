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

export default function Rent() {
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
  const [error, setError] = useState(null);
    const [rentItems, setRentItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/rentitems/');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setRentItems(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
}, []);

const handleSearch = async () => {
    try {
        const response = await fetch(`/api/rentitems/search/${searchTerm}`);
        const data = await response.json();
        setRentItems(data);
    } catch (error) {
        console.error('Error searching rent & borrowlistings:', error);
    }
};

  useEffect(() => {
    //setRentItems(initialItems);
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
          style={{ fontSize: '16px', borderRadius: '8px' }} />
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
        label={rowData.name}
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
    //navigate(`/home/second-hand/second-hand-item`);//${id}
  };

  /*     function handleChange(itemId) {
        setSelected(itemId)
        
        console.log(`Item clicked with ID: ${itemId}`);
        navigate(`/home/second-hand/${itemId}`);
    } */

  const priceBodyTemplate = (rowData) => {
    return `$${rowData.price}`;
  };

  const descriptionBodyTemplate = (rowData) => {
    return `$${rowData.description}`;
  };

  const conditionBodyTemplate = (rowData) => {
    return `$${rowData.conditionOfProduct}`;
  };

  const negotiableBodyTemplate = (rowData) => {
    if(rowData.isNegotiable == true){
    return `{Negotiable}`;
    }
    else{
      return `{Non-Negotiable}`;
    }
  };

  const sellerRatingBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <i className="pi pi-star" style={{ color: 'gold' }}></i>
        <span className="ml-2">{rowData.sellerRating}</span>
      </React.Fragment>
    );
  };

  /* const sellerRatingFilterTemplate = (options) => {
    return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="decimal" />;
  }; */

  const header = renderHeader();

  return (
    <div className="second-hand-sales-page">
      <div className="card">
        <h5>Filter Menu</h5>
        <p>Filters are displayed in an overlay.</p>
        <DataTable
          value={rentItems}
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
                src={rowData.photo}
                alt={rowData.name}
                style={{ width: '100px', height: '100px' }}//, borderRadius: '50%' 
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
            field="description"
            header="Description"
            body={descriptionBodyTemplate}
            filter
            filterField='Filter'
            filterPlaceholder="Search by image"
            style={{ minWidth: '6rem' }}
          />
          <Column
            field="condition"
            header="Condition"
            //filter
            //filterElement={sellerRatingFilterTemplate}
            style={{ minWidth: '12rem' }}
            body={conditionBodyTemplate}
          />
          <Column
            field="negotiable"
            header="Negotiation Status"
            //filter
            //filterElement={sellerRatingFilterTemplate}
            style={{ minWidth: '12rem' }}
            body={negotiableBodyTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
}