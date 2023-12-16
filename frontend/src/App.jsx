import React, { useState } from 'react';
import { Routes, Route, Outlet, Link, useRoutes, useNavigate, useLocation } from "react-router-dom"
//import { BrowserRouter as Router, Route, Switch, Link, Outlet } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Login from './Login';
import Home from './Home';
import ClubHome from './ClubHome';
import SecondHand from './SecondHand';
import SecondHandItem from './SecondHandItem';
import Rent from './Rent';
import LostandFound from './LostandFound';
import Donations from './Donations'; 
import DonationForm from './DonationForm'; 
import Profile from './Profile';
import Messages from './Messages';
import EditProfile from './EditClubProfile';

import 'primeflex/primeflex.min.css'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {

  const routes= [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "/club-home",
          element: <ClubHome />,
          children: [
            {
              path: "/club-home/edit-profile",
              element: <EditProfile />,
            },
          ]
        },
        {
          path: "/home",
          element: <Home />,
          children: [
            {
              path: "/home/second-hand",
              element: <SecondHand />,
              children: [
                {
                  path: "/home/second-hand/second-hand-item/:id",
                  element: <SecondHandItem />,
                },
              ]
            },
            {
              path: "/home/rent",
              element: <Rent />,
            },
            {
              path: "/home/lost-and-found",
              element: <LostandFound />,
            },
            {
              path: "/home/donations",
              element: <Donations />,
              /* children: 
                {
                  path: "/home/donations/donation-form",
                  element: <DonationForm />
                },
              ] */
            },
            {
              path: "/home/messages",
              element: <Messages />,
            },
            {
              path: "/home/profile",
              element: <Profile />,
            }
          ]
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  const element = useRoutes(routes)

  return (
    <>

      {element}

    </>
  )

}

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isNotLoginPath = location.pathname !== '/';

  const handleLogout = () => {

    navigate('/');
  };

  return (
    <div className="p-5 pl-7">
      <nav>
        <ul className="list-none d-flex align-items-center">
          {isNotLoginPath && (
            <>
              <li>
                <img
                  src="./src/logo.png"
                  alt="Logo"
                  style={{ marginRight: '8px' , width: '260px',     // Set the width to your desired size
                  height: 'auto',}}  // Adjust the margin as needed
                />
               <button
                className='absolute right-0'
                style={{ marginRight: '100px' }}
                onClick={handleLogout}
              >
                <i className='pi pi-fw pi-sign-out'></i> LOGOUT
              </button>


              </li>
            </>
          )}
        </ul>
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

export default App;


/* function Login() {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  function handleChange(input) {
      setStudentId(input);
  }

  const handleSubmit = () => {
      if(studentId==1234)
      navigate(`/home`);
  }

  return (
      <div className="mr-8">
          <h2 className="">Enter Student ID</h2>
          <InputText className="border-round h4" value={studentId} onChange={(event) => handleChange(event.target.value)} />
          <Button onClick={handleSubmit} className="surface-300 border-none">Submit</Button>
          <Outlet />
      </div>
  );
} */


