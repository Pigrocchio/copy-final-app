import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Partecipantlist from "../Match/Partecipantlist";

import OrganizeMatchsService from "../../../service/OrganizeMatch.service";

class ExploreMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {
        participant: []
      }
    };
    this._service = new OrganizeMatchsService();
  }

  componentDidMount = () => this.updateMatch();

  updateMatch = () => {
    const MatchId = this.props.match.params.id;
    this._service
      .getOneMatch(MatchId)
      .then(theMatch => this.setState({ match: theMatch.data }))
      .catch(err => console.log(err));
  };

  joinMatch = () => {
    const logId = this.props.loggedInUser && this.props.loggedInUser._id;
    const matchId = this.state.match._id;
    console.log("id person", logId);
    console.log("id Match", matchId);
    this._service
      .joinMatch(logId, matchId)
      .then(x => this.updateMatch())
      .catch(err => console.log(err));
  };

  resign = () => {
    const logId = this.props.loggedInUser && this.props.loggedInUser._id;
    const matchId = this.state.match._id;
    console.log(logId, matchId);
    console.log("ok");
    this._service
      .resignFromMatch(logId, matchId)
      .then(x => {
        this.updateMatch();
      })
      .catch(err => console.log(err));
  };

  render() {
    const logId = this.props.loggedInUser && this.props.loggedInUser._id;
    const matchId = this.state.match._id;

    console.log("ID LOG USER", logId);
    console.log("MATCH DATA", this.state.match._id);
    const arrayIdPartecipant = this.state.match.participant;
    console.log("LIST PARTECIPANT ARRAY", arrayIdPartecipant);

    let arrayUser = arrayIdPartecipant.map(elm => elm._id);
    console.log("ARRAY ID", arrayUser);

    
    let userAppointed = arrayUser.some(elm => elm == logId);
    console.log('USUARIO PRESENTE ?:', userAppointed);

    const cut = this.state.match.date && this.state.match.date.substr(0, 10);
    const participantLenght = this.state.match.participant && this.state.match.participant.length;
    const club = this.state.match.club && this.state.match.club.name;

    // JOIN BUTTON DISABLE AFTER FULL MATCH LIST

    let joinbutton;

    if (userAppointed == false) {
      joinbutton = (
        <Link to={this.props._id} className="btn btn-sm btn-success" onClick={() => this.joinMatch()}>
          Join the match
        </Link>
      );
    } else if (userAppointed == true) {
      joinbutton = <Link className="btn btn-sm btn-warning">Alredy joined </Link>;
    } else if (participantLenght < 3) {
      joinbutton = (
        <Link to={this.props._id} className="btn btn-sm btn-succes" onClick={() => this.joinMatch()}>
          Join the match
        </Link>
      );
    } else {
      joinbutton = <Link className="btn btn-sm btn-danger">Match Full</Link>;
    }

    return (
      <Container className="match-details">
        <section>
          <Row>
            <Col md={6}>
              <h2>{this.state.match.name}</h2>
              <p>
                <strong>Descripción:</strong> {this.state.match.description}
              </p>
              <hr></hr>
              <p>
                <strong>Date:</strong> <p>{cut}</p>
                <small>Star Hour:</small> {this.state.match.starthour} | End Hours: {this.state.match.endhour}
              </p>
              <strong>Club:</strong> {club}
              <hr></hr>
              <strong>Partecipants number:</strong> {participantLenght}
              <hr></hr>
              <Row>{this.state.match.participant && this.state.match.participant.map(matchs => <Partecipantlist key={matchs._id} {...matchs} />)}</Row>
              <br />
              {joinbutton}
              <Link to="/explore" className="btn btn-sm btn-dark">
                Volver
              </Link>
              <Button className="btn btn-sm btn-danger" onClick={this.resign}>
                Resing form match Match
              </Button>
            </Col>

            <Col md={{ span: 4, offset: 2 }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDG88rK2sVwRDbZIJautuIZpNt32kAQpSU",
                  language: "en"
                }}
                style={{ width: "100%", height: "100%", position: "relative" }}
                defaultCenter={{ lat: 40.73, lng: -73.93 }}
                center={{ lat: 40.73, lng: -73.93 }}
                defaultZoom={12}
              ></GoogleMapReact>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default ExploreMatch;


