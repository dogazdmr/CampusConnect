import React, { useState } from 'react';
import { useNavigate, Routes, Route, Outlet, Link, useRoutes, useLocation } from "react-router-dom"
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
import { TabMenu } from 'primereact/tabmenu';
        
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card>
          <img
            src={"./src/bilkoimo.jpg"}
            alt={'home'}
            style={{ width: '1000px', height: 'auto' }}
          />
        </Card>
      </div>
      
      )}

    </>
  )

}

function Layout() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { arialabel: 'Home', icon: 'pi pi-fw pi-home', to: '/home' },
    { label: 'Second Hand', icon: 'pi pi-fw pi-tag', to: '/home/second-hand' },
    { label: 'Rent', icon: 'pi pi-fw pi-calendar', to: '/home/rent' },
    { label: 'Donations', icon: 'pi pi-fw pi-heart', to: '/home/donations' },
    { label: 'Lost and Found', icon: 'pi pi-fw pi-search', to: '/home/lost-and-found' },
    { label: 'Messages', icon: 'pi pi-fw pi-comments', badge:"8", to: '/home/messages', className:'absolute right-0', style: { marginRight: '240px' } },
    { label: 'Profile', icon: 'pi pi-fw pi-user', to: '/home/profile' , className: 'absolute right-0', style: { marginRight: '100px' }},
  ];

  const handleTabChange = (e) => {
    setActiveIndex(e.index);
    navigate(items[e.index].to);
  };

  return (
    <div>
      <nav>
        <TabMenu model={items} activeIndex={activeIndex} onTabChange={handleTabChange}>
          {items.map((item, index) => (
            <TabMenu.Item
              key={index}
              label={item.label}
              icon={item.icon}
              className={activeIndex === index ? 'active-tab' : ''}
              
            />
          ))}
        </TabMenu>
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