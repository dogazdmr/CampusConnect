import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, useRoutes, useLocation } from "react-router-dom"
//import { BrowserRouter as Router, Route, Switch, Link, Outlet } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
//import Login from './Login';
import SecondHand from './SecondHand';
import Rent from './Rent';
import LostandFound from './LostandFound';
import Donations from './Donations';
import { Card } from 'primereact/card';
//import { Donations } from './Donations';
//import { UserProfile } from './UserProfile'; 
//import { FaAmazon } from 'react-icons/fa';

import 'primeicons/primeicons.css';
/* import 'primeflex/primeflex.min.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css"; */


function Home() {

  const location = useLocation();

  // Check if the current location is the home page
  const isHomePage = location.pathname === '/home';

  return (
    <>

      <Layout />
      {isHomePage && (
        <div>
          <Card>
            <img
              src={
                'https://unsplash.com/photos/0rvKw0fDiHk/download?ixid=M3wxMjA3fDF8MXxhbGx8MXx8fHx8fDJ8fDE3MDI2NzIyMjh8&force=true'
              }
              alt={'home'}
              style={{ width: '100px', height: '100px' }}
              className="center"
            />
          </Card>
        </div>
      )}

    </>
  )

}

function Layout() {
  return (
    <div >
      <nav className="mr-8 ">

        <Button className=" ml-3 text-color surface-300">
          <Link to="/home/second-hand">Second Hand</Link>
        </Button>
        <Button className=" ml-3 text-color surface-300">
          <Link to="/home/rent">Rent</Link>
        </Button>
        <Button className=" ml-3 text-color surface-300">
          <Link to="/home/donations">Donations</Link>
        </Button>
        <Button className=" ml-3 text-color surface-300">
          <Link to="/home/lost-and-found">Lost and Found</Link>
        </Button>
        <Button
          icon="pi pi-user"
          className=" absolute right-0 p-button-rounded p-button-info p-button-text "
          aria-label="User"
        >
          <Link to="/home/profile"> Profile </Link>
        </Button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home">Go to the home page</Link>
      </p>
    </div>
  );
}

export default Home;