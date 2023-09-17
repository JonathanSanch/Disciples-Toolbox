//AIzaSyBG_jpsINMmnfPnQfJEc8kol80b4rXs27E API KEY for Google map    

import React from "react";
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define your Google Maps API key
const apiKey = 'AIzaSyBG_jpsINMmnfPnQfJEc8kol80b4rXs27E';

// Define the initial position for the map
const initialPosition = { lat: 37.7749, lng: -122.4194 }; // San Francisco

// Define your LocatorMap component
function mapLocator() {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={initialPosition}
        zoom={10}
      >
        {/* Add a Marker to the map */}
        <Marker position={initialPosition} />
      </GoogleMap>
    </LoadScript>
  );
}

export default mapLocator; 