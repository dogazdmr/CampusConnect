import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, useRoutes } from "react-router-dom"
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
//import { Donations } from './Donations';
//import { UserProfile } from './UserProfile'; 

import 'primeflex/primeflex.min.css'
//theme
//import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";


function Home() {

  return (
    <>

      <Layout/>

    </>
  )

}

function Layout() {
    console.log("are")
  return (
    <div>
      <nav>

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
        {/* <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-text " aria-label="User" /> */}
        <Button className="text-color surface-300 ml-3 ">
          <Link to="/home/profile">Profile</Link>
        </Button>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}


function Profile(){
  return (
    <div>
      <p>Profile</p>
    </div>
  )
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