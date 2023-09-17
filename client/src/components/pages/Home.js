import React from 'react'
import App from '../../App.css'
// import Container  from '@mui/material/Container'
// import Box from "@mui/material/Box"
// import Grid from "@mui/material/Grid"
// import { Typography } from '@mui/material'
import HeroSection from '../HeroSection'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

// Define your Google Maps API key
const apiKey1 = 'AIzaSyBG_jpsINMmnfPnQfJEc8kol80b4rXs27E';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey1,
  });

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div>
      <HeroSection />
      <Map />
    </div>
  )
}

function Map() {
  return <GoogleMap
    zoom={10}
    center={{ lat: 44, lng: -80 }}
    mapContainerClassName="map-container"
    ></GoogleMap>
}
