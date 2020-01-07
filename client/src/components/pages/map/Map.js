import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"


import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow, } from "react-google-maps";
/*global google*/



const Map = withScriptjs(
  withGoogleMap(props => {

    console.log("props del valore slider", props.distanceValue);
 
    const { clublist, googleMapURL, prova } = props;
    console.log("------> list club del componente Simplemap", clublist);
    let result = []
    result = clublist.map(elm => [{ lat: elm.club.location.coordinates[0], lng: elm.club.location.coordinates[1] }]);
console.log('Result', result)
    const [selectedMatch, setSelectedMatch] = useState(null);

// MATCH MAP FILTER 
    
    const center = new google.maps.LatLng( 40.388746, -3.693698 );
    console.log('center:', center)
  
    let filteredMarkers = []
    filteredMarkers = props.clublist.filter(m => {
      const markerLoc = new google.maps.LatLng((m.club.location.coordinates[0]),parseFloat( m.club.location.coordinates[1]));
   
      
   const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
   console.log('distance',distanceInKm)
      if (distanceInKm < props.distanceValue) {
        return m;
      }
      
    })
      
console.log("ok");
    
    
    
    
    props.returnFilteredMatch(filteredMarkers);
    

 
    
    useEffect(() => {
      const listener = e => {
        if (e.keyCode === 27) {
          setSelectedMatch(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);

    
    return (
      <>
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.388746, lng: -3.693698 }}>
          
          {filteredMarkers.map(item => (
            
            <Marker
              key={item._id}
              position={{
                lat: item.club.location.coordinates[0],
                lng: item.club.location.coordinates[1]
              }}
              onClick={() => {
                setSelectedMatch(item);
              }}
              label={{
                text: `${item.club.name}`,
                color: "black",
                fontSize: "10px"
              }}
              labelStyle={{ backgroundColor: "yellow", fontSize: "32px", padding: "16px" }}
              className="pin"
            />
          ))}
          {selectedMatch && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedMatch(null);
              }}
              position={{
                lat: selectedMatch.club.location.coordinates[0],
                lng: selectedMatch.club.location.coordinates[1]
              }}
            >
              <div>
                <h5>{selectedMatch.club.name}</h5>
                <p> {selectedMatch.club.description}</p>
                <p> {selectedMatch.club.date}</p>

                <Link to={`/explorematch/${selectedMatch._id}`}>More detail</Link>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    );
  })
);

export default Map;
