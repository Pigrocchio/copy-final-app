import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import OrganizeMatchService from "../../../service/OrganizeMatch.service";

import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => {
    // const lat = props.coordinates.lat && props.coordinates.lat;
    // const lng = props.coordinates.long && props.coordinates.long;
    const { clublist } = props;
    console.log("------> list club del componente Simplemap", clublist);
      let result = clublist.map(elm => console.log("ELM LOCATION", elm.club.location.coordinates[0]));

    const [selectedMatch, setSelectedMatch] = useState(null);

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
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 40.388746, lng: -3.693698 }}>
        {clublist.map(item => (
          <Marker
            key={item._id}
            position={{
              lat: item.club.location.coordinates[0],
              lng: item.club.location.coordinates[1]
            }}
            onClick={() => {
              setSelectedMatch(item);
            }}
            title={`${item.club.name}`}
            label={`${item.club.name}`}
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
              

              <Link to={`/match/${selectedMatch._id}`}>More detail</Link>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  })
);

export default Map;
