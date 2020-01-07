import React, { Component } from "react";
import { Button, Form, Row, Container, Col, Modal } from "react-bootstrap";
import Service from "../../../service/OrganizeMatch.service";
import ExploreMatchlist from "./ExploreMatchlist";
import SliderValue from "../../ui/SliderValue"

import WrappedMap from "../map/Map";


class Explore extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.handleData = this.handleData.bind(this);
    this.updateFilteredMatch = this.updateFilteredMatch.bind(this);
    this.state = {
      organizedmatch: [],
      lat: [],
      lng: [],
      coord: [],
      fromChild: 0,
      filteredMatch: []
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
      })
      .catch(err => console.log("Error", err));
    this.positionUser();
  };

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  updateFilteredMatch (data) {
    let filter = data
    this.state.filteredMatch = filter
    console.log('DATA', this.state.filteredMatch)
    console.log("Filter", filter);
    
  }

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
    const filter = []
    var date = new Date();
    var stringDate = date.toString().split(' ').join('').substring(6,14)
   
    console.log("Actual Date", stringDate);

   
    return (
      <>
        <Container className="margin-top">
          <Row>
            <Col></Col>
            <Col>
              <h1>Find Football match around you</h1>
              <div className="slider">
                <span>Select the distance from you: </span> <SliderValue handlerFromParant={this.handleData} />
              </div>

              <div style={{ height: "45vh", width: "800px" }}>
                <WrappedMap
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE}`}
                  loadingElement={<div style={{ height: `45vh` }} />}
                  containerElement={<div style={{ height: `45vh` }} />}
                  mapElement={<div style={{ height: `45vh` }} />}
                  clublist={this.state.organizedmatch}
                  coordinates={{ lat, long }}
                  prova={"ciao"}
                  distanceValue={this.state.fromChild}
                  returnFilteredMatch={this.updateFilteredMatch}
                />
              </div>
            </Col>
            <Col></Col>
          </Row>

          <br />

          <Row>
            <Col></Col>
            <Col className="text-center">
              <h2>Join the match</h2>
              {this.state.filteredMatch &&
                this.state.filteredMatch.map(matchs => (
                  <ExploreMatchlist key={matchs._id} {...matchs} id={this.props.loggedInUser._id} updatelist={this.updateOrganizedMatchList} />
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


