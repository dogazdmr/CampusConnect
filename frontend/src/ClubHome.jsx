import React, { useState } from 'react';

function ClubHome() {

    return (
        <p>
            club homeee
        </p>
    );

/*   return (
    <>

      <Layout/>

    </>
  ) */

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

export default ClubHome;