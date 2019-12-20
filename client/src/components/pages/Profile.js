import React, { Component } from "react";
import { Button, Form, Row, Container, Col, Modal } from "react-bootstrap";
import OrganizeMatch from "../pages/Match/OrganizeMatch";
import MatchCreatedlist from "./Match/MatchCreatedlist";
import EditMatch from "../pages/Match/EditMatch";

import Service from "../../service/OrganizeMatch.service";
import MatchJoinedList from "./Match/MatchJoinedlist";

class Profile extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      showModalWindow1: false,
      organizedmatch: [],
      joinedmatch: [],
      logUser: props.loggedInUser._id
    };
  }

  componentDidMount = () => this.updateOrganizedMatchList();

  updateOrganizedMatchList = () => {
    // console.log(this.props.loggedInUser._id);
    console.log("ID USUARIO LOGGEADO:", this.state.logUser);
    this._service
      .getAllCreatedMatch()
      .then(allCreatedMatchFromDB => {
        console.log("Todos lo partidos:", allCreatedMatchFromDB.data);
        //Filter for only match created
        let matchcreated = allCreatedMatchFromDB.data.filter(ownermatch => ownermatch.owner == this.props.loggedInUser._id);
        this.setState({ organizedmatch: matchcreated });
        console.log("STATE ORGANIZED Match", this.state.organizedmatch);
        // let matchAssisted = allCreatedMatchFromDB.data.filter(match => match.participant.includes(this.props.loggedInUser._id));
        // console.log("---------> ASSISTED:", matchAssisted);
      })
      .catch(err => console.log("Error", err));


    
    //Show only joined match as partecipant
    const logId = this.props.loggedInUser && this.props.loggedInUser._id;
    this._service
      .getJoinedMatch(logId)
      .then(onlyJoinedMatch => {
        console.log("Solo Joined Match:", onlyJoinedMatch.data);
        this.setState({ joinedmatch: onlyJoinedMatch.data });
        console.log('STATE DI JOINED MATCH:', this.state.joinedmatch)
        ;
      })
      .catch(err => console.log("Error", err));
  };

  deleteTheMatch(id) {
    this._service
      .deleteMatch(id)
      .then(x => {
        console.log("se ha borrado y debe actualizar");
        this.updateOrganizedMatchList();
      })
      .catch(err => console.log(err));
  }

  handleShow = () => this.setState({ showModalWindow1: true });
  handleClose = () => this.setState({ showModalWindow1: false });

  render() {
    const timeCut = this.props.loggedInUser.birthDate;
    const timeCutSplice = timeCut.substr(0, 10);

    return (
      <Container className="margin-top">
        <h2>Bienvenid@ {this.props.loggedInUser.username}</h2>
        <Row className="align">
          <Col className="profile-card" md={8}>
            <div className="profile-card">
              <strong> Email: </strong> <p className="informacion">{this.props.loggedInUser.email}</p>
              <strong> Birthday: </strong> {timeCutSplice}
              <br />
              <strong>Preferred role: </strong> {this.props.loggedInUser.role}
              <br />
              <br />
              <div>
                <Button variant="success" onClick={this.handleShow}>
                  Organize a match
                </Button>
              </div>
              <br />
            </div>
          </Col>

          <Col className="profile-card" md={4}>
            <div className="profile-card">
              <img src={this.props.loggedInUser.imageUrl} alt={this.props.loggedInUser.imageUrl} />
                 </div>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h4>Organized Match</h4>
            <Row>
              {this.state.organizedmatch.map(matchs => (
                <MatchCreatedlist
                  key={matchs._id}
                  {...matchs}
                  deleteMatch={this.deleteTheMatch.bind(this)}
                  updatematch={this.updateOrganizedMatchList}
                  loggedInUser={this.props.loggedInUser}
                />
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <h4>Joined Match</h4>
            <Row>
              {this.state.joinedmatch.map(matchs => (
                <MatchJoinedList key={matchs._id} {...matchs} loggedInUser={this.props.loggedInUser} matchdetail={this.state.organizedmatch} />
              ))}
            </Row>
          </Col>
        </Row>

        <Modal show={this.state.showModalWindow1} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Organize a match</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrganizeMatch loggedInUser={this.props.loggedInUser} closeModalWindow={this.handleClose} updatematch={this.updateOrganizedMatchList} />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default Profile;

// MAP PER LISTA SIN EDITAR
// <Row>
//   {this.state.organizedmatch.map(matchs => (
//     <MatchCreatedlist
//       key={matchs._id}
//       {...matchs}
//       deleteMatch={this.deleteTheMatch.bind(this)}
//       updatematch={this.updateOrganizedMatchList}
//       loggedInUser={this.props.loggedInUser}
//     />
//   ))}
// </Row>;
