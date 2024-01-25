import React from 'react';
import Profile from './Profile';
import Listings from './Listings';
import './All.css'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Profile />
      <Listings />
    </div>
  );
}

export default Dashboard;
