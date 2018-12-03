import React from 'react';
import HotelDetails from '../layout/HotelDetails';
import Sidebar from '../layout/Sidebar';

//For now renders HotelDetails instead of Hotels list
export default () => {
  return (
    <div className="content">
        <Sidebar/>
        <HotelDetails/>
    </div>
  )
}