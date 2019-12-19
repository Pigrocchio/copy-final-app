import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import React, { Component, useState } from "react";
import ClubService from "../../../service/Club.service";



const Singlemapdetail = props => {
  const lat = props.coordinates.lat && props.coordinates.lat;
  console.log(lat);

  const lng = props.coordinates.long && props.coordinates.long;
  console.log(lng);

  return (
    <div style={{ height: "35vh", width: "100%" }}>
      <GoogleMapReact bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}` }} center={{ lat: lat, lng: lng }} defaultZoom={10}>
        <Marker lat={lat} lng={lng} name="My Marker" color="blue" />
        
      </GoogleMapReact>
    </div>
  );
};

export default Singlemapdetail;
