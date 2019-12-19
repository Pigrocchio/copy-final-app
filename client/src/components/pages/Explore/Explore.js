import React, { Component } from "react";
import { Button, Form, Row, Container, Col, Modal } from "react-bootstrap";
import Service from "../../../service/OrganizeMatch.service";
import ExploreMatchlist from "./ExploreMatchlist";
import SimpleMap from "../map/SimpleMap";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import WrappedMap from "../map/Map";


class Explore extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      organizedmatch: [],
      lat: [],
      lng: [],
      coord: []
    };
  }

  componentDidMount = () => this.updateOrganizedMatchList();

  updateOrganizedMatchList = () => {
    let id = this.props.loggedInUser._id;
    console.log("Id logged User", id);
    this._service
      .getAllCreatedMatch()
      .then(allCreatedMatchFromDB => {
        this.setState({ organizedmatch: allCreatedMatchFromDB.data });
        // console.log("listato eventi:", this.state.organizedmatch);
      })
      .catch(err => console.log("Error", err));
    this.positionUser();
  };

  positionUser = () => {
    let usercoord = [];
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        usercoord.push(lat, lon);
        this.setState({ coord: [lat, lon] });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  render() {
    const club = this.state.organizedmatch.club && this.state.organizedmatch.club.name;
    const lat = this.state.coord[0];
    const long = this.state.coord[1];
console.log(typeof lat, typeof long)

   
    console.log("el matchhhhh", this.state.organizedmatch);
    return (
      <>
        <Container>
          <Row>
            <h1>Find Football match around you</h1>
            <div style={{ height: "45vh", width: "100%" }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE}`}
                loadingElement={<div style={{ height: `45vh` }} />}
                containerElement={<div style={{ height: `45vh` }} />}
                mapElement={<div style={{ height: `45vh` }} />}
                clublist={this.state.organizedmatch}
                coordinates={{ lat, long }}
              />
            </div>
          </Row>

          <br />
          <h2>Join the match</h2>
          <Row>
            <Col></Col>
            <Col>
            {this.state.organizedmatch &&
              this.state.organizedmatch.map(matchs => (
                <Col md={6}>
                  <ExploreMatchlist key={matchs._id} {...matchs} id={this.props.loggedInUser._id} updatelist={this.updateOrganizedMatchList} />
                </Col>
              ))}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Explore;

//  <Row>
//             <SimpleMap clublist={this.state.organizedmatch} coordinates={{ lat, long }}></SimpleMap>
//           </Row>
