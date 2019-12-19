import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrganizeMatchService from "../../../service/OrganizeMatch.service";

import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";


const NewSingleMap = withScriptjs(
  withGoogleMap(props => {
    const lat = props.coordinates.lat && props.coordinates.lat;
    const lng = props.coordinates.long && props.coordinates.long;
    const { clubid } = props;
    console.log(typeof lat);
    console.log(lng);
   

      return (
        <>
          <GoogleMap defaultZoom={10} center={{ lat: lat, lng: lng }}>
            <Marker
              position={{
                lat: lat,
                lng: lng
              }}
              className="pin"
            />
          </GoogleMap>
        </>
      );
  })
);

export default NewSingleMap;