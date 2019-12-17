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
        console.log(" STATE ORGANIZED Match", this.state.organizedmatch);

        // Filter for ony match where the usuer is appointed
       
        let join = allCreatedMatchFromDB.data.map(elm => elm.participant);
        console.log("todos array participant", join);
        let join2 = join.flat();
        console.log(join2)
        let joinedmatch = join2.map(elm => elm._id)
        let filterjoin = joinedmatch.filter(elm => elm == this.props.loggedInUser._id);
        console.log(filterjoin)
        this.setState({ joinedmatch: filterjoin });
        console.log(" STATE Joined Match", this.state.joinedmatch);
        

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
                <Button variant="success" onClick={this.handleShow}>
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
                    loggedInUser={this.props.loggedInUser}
                  />
                ))}
              </Row>
              <br />
              <h4>Joined Match</h4>
              <Row>
                {this.state.joinedmatch.map(matchs => (
                  <MatchJoinedList key={matchs._id} {...matchs} loggedInUser={this.props.loggedInUser} matchdetail={this.state.organizedmatch} />
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
