import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import React, { Component, useState } from "react";
import ClubService from "../../../service/Club.service";
import Markers from "./Markers";



const SimpleMap = (props) => {

  const lat = props.coordinates.lat && props.coordinates.lat;
  const lng = props.coordinates.long && props.coordinates.long;
const clublist = props.clublist;
  console.log('------> list club del componente Simplemap', clublist)  
  // let result = clublist.map(elm => console.log("ELM LOCATION", elm.club.location.coordinates[0]));
  
 

    return (
      <div style={{ height: "35vh", width: "100%" }}>
        <GoogleMapReact bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}` }} center={{ lat: lat, lng: lng }} defaultZoom={10}>
          {clublist.map(item => (
            <div
              key={item._id}
              onClick={() => alert(`cccc ${item._id}`)}
              className="pin"
              title={`${item.club.name}`}
              lat={item.club.location.coordinates[0]}
              lng={item.club.location.coordinates[1]}
              label={{ text: 'A123' }}
            ></div>
          ))}
        </GoogleMapReact>
      </div>
    );
  };


export default SimpleMap;

