import React from 'react';
import PropertyTile from './PropertyTile';
import './All.css'

function Listings() {
  const propertyData = [
    // Sample property data (replace with real data from API)
    {
      id: 1,
      title: 'Luxury Apartment',
      location: 'Downtown',
      price: '£150 per night',
    },
    {
      id: 2,
      title: 'Cozy Cottage',
      location: 'Suburb',
      price: '£80 per night',
    },
    {
      id: 3,
      title: 'Beach House',
      location: 'Coast',
      price: '£100 per night',
    },


    // Add more property objects
  ];

  return (
    <div className="Listings">
      {propertyData.map((property) => (
        <PropertyTile key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Listings;
