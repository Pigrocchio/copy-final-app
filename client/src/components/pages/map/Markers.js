import React from "react";
import "./marker.css";

const Markers = props => {
  const { color, name, id, lat, lng } = props;

  return (
    <div
      onClick={() => alert("ciao")}
      className="pin"
      title={name}
      lat={lat}
      lng={lng}
      icon={{ url: "../../../../public/logo192.png" }}
    />
  );
};

export default Markers;
