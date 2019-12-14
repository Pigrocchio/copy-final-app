import React, { Component } from "react";
import { Button, Form, Row, Container, Col, Modal } from "react-bootstrap";
import OrganizeMatch from "../pages/OrganizeMatch";
import MatchCreatedlist from "../pages/MatchCreatedlist";
import EditMatch from "../pages/EditMatch"

import Service from "../../service/OrganizeMatch.service";

class Profile extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      showModalWindow1: false,
      showModalWindow2: false,
      organizedmatch: [],
      logUser: props.loggedInUser._id
    };
  }

  componentDidMount = () => this.updateOrganizedMatchList();

  updateOrganizedMatchList = () => {
    console.log(this.props.loggedInUser._id);
    console.log(this.state.logUser);
    this._service
      .getAllCreatedMatch()
      .then(allCreatedMatchFromDB => {
        console.log(allCreatedMatchFromDB.data);
        this.setState({ organizedmatch: allCreatedMatchFromDB.data.filter(ownermatch => ownermatch.owner == this.props.loggedInUser._id) });
        console.log(this.state.organizedmatch);
      })
      .catch(err => console.log("Error", err));
  };

  deleteTheMatch(id) {
    // alert(id);
    //   const MatchId = this.state.organizedmatch.id;
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
  handleShow2 = () => this.setState({ showModalWindow2: true });
  handleClose2 = () => this.setState({ showModalWindow2: false });

  render() {
    const timeCut = this.props.loggedInUser.birthDate;
    const timeCutSplice = timeCut.substr(0, 10);
   
    return (
      <Container>
        <h2>Bienvenid@ {this.props.loggedInUser.username}</h2>
        <Row>
          <Col className="profile-card" md={8}>
            <div className="profile-card">
              <strong> Email: </strong> <p className="informacion">{this.props.loggedInUser.email}</p>
              <strong> Birthday: </strong> {timeCutSplice}
              <br />
              <strong>Preferred role: </strong> {this.props.loggedInUser.role}
              <br />
              <br />
              <div>
                <Button variant="dark" onClick={this.handleShow}>
                  Organize a match
                </Button>
              </div>
              <h4>Organized Match</h4>
              <Row>
                {this.state.organizedmatch.map(matchs => (
                  <MatchCreatedlist
                    key={matchs._id}
                    {...matchs}
                    deleteMatch={this.deleteTheMatch.bind(this)}
                    updatematch={this.updateOrganizedMatchList}
                    openmodal2={this.handleShow2}
                  />
                ))}
              </Row>
            </div>
          </Col>

          <Col className="profile-card" md={4}>
            <div className="profile-card">
              <img src={this.props.loggedInUser.imageUrl} alt={this.props.loggedInUser.imageUrl} />
              <p className=""></p>
            </div>
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

        <Modal show={this.state.showModalWindow2} onHide={this.handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Edit a match</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditMatch
              idMatch={this.state.organizedmatch}
              loggedInUser={this.props.loggedInUser}
              closeModalWindow={this.handleClose2}
              updatematch={this.updateOrganizedMatchList}
            />
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default Profile;
