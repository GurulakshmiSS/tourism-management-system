import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
   <nav>
      <ul id="navigation">                                                                                                                                     
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About US</Link></li>
          {/* <li><Link to="/package">Package</Link></li> */}
          <li><Link to="/create_tour">Packages</Link></li>
         {/*<li><Link to="/tour_booking">Tour Booking</Link></li>*/}
          <li><Link to="/contact">Contact Us</Link></li>
    </ul>
 
    </nav>
  );
}
export default Navigation;




