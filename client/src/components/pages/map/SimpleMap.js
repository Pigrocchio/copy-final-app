import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import React, { Component, useState } from "react";
import ClubService from "../../../service/Club.service";

// class SimpleMap extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { club: {} };
//     this._service = new ClubService();
//   }

//   componentDidMount = () => this.updateClubList();

//   updateClubList = () => {
//     const ClubId = this.props.clubid;
//     this._service
//       .getOneClub(ClubId)
//       .then(theClub => this.setState({ club: theClub.data }))
//       .catch(err => console.log(err));
//   };

//   render() {
    
//     console.log("props del padre", this.props.coordinates);
//     const idClub = this.props.clubid && this.props.clubid
//     console.log(this.state)
//     console.log("ID DEL CLUB", this.props.clubid);
//     // const [center, setCenter] = useState({ lat: lat, lng: lng });
//     // const [zoom, setZoom] = useState(11);

//     return (
//       <div style={{ height: "50vh", width: "100%" }}>
//         {/* <GoogleMapReact bootstrapURLKeys={{ key: "AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU" }} defaultCenter={center} defaultZoom={zoom}>
//           <Marker lat={lat} lng={lng} name="My Marker" color="blue" />
//         </GoogleMapReact> */}
//       </div>
//     );
//   }
// }
// export default SimpleMap;

const SimpleMap = (props) => {

  const lat = props.coordinates.lat && props.coordinates.lat;
  console.log(lat)

  const lng = props.coordinates.long && props.coordinates.long;
  console.log(lng);
 

    return (
      <div style={{ height: "35vh", width: "100%" }}>
        <GoogleMapReact bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE}`}} center={{ lat: lat, lng: lng }} defaultZoom={10}>
          <Marker lat={lat} lng={lng} name="My Marker" color="blue" />
        </GoogleMapReact>
      </div>
    );
  };


export default SimpleMap;
