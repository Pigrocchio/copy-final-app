import React, { Component } from "react";
import { Button, Form, Row, Container, Col, Modal } from "react-bootstrap";
import Service from "../../../service/OrganizeMatch.service";
import ExploreMatchlist from "./ExploreMatchlist";

class Explore extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      organizedmatch: [],
      
    };
  }

  componentDidMount = () => this.updateOrganizedMatchList();

  updateOrganizedMatchList = () => {
    let id = this.props.loggedInUser._id;
    console.log('Id logged User', id);
    this._service
      .getAllCreatedMatch()
      .then(allCreatedMatchFromDB => {
        this.setState({ organizedmatch: allCreatedMatchFromDB.data });
        console.log('listato eventi:', this.state.organizedmatch);
      })
      .catch(err => console.log("Error", err));
  };

  render() {

  const club = this.state.organizedmatch.club && this.state.organizedmatch.club.name;
  
 

    return (
      <>
        <Container>
          <h1>Find Football match around you</h1>
          <Row>
            {this.state.organizedmatch &&
              this.state.organizedmatch.map(matchs => (
                <ExploreMatchlist key={matchs._id} {...matchs} id={this.props.loggedInUser._id} updatelist={this.updateOrganizedMatchList} />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}



export default Explore;
