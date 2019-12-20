import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Partecipantlist from "../Match/Partecipantlist";

import WrappedMap from "../map/NewSingleMap";

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
    // console.log("ARRAY ID", arrayUser);

    
    let userAppointed = arrayUser.some(elm => elm == logId);
    // console.log('USUARIO PRESENTE ?:', userAppointed);

    const cut = this.state.match.date && this.state.match.date.substr(0, 10);
    const participantLenght = this.state.match.participant && this.state.match.participant.length;
    const club = this.state.match.club && this.state.match.club.name;
    const clubId = this.state.match && this.state.match.club;

    const lat = this.state.match.club && this.state.match.club.location.coordinates[0];
    console.log('Club coordinates', lat);
    
    const long = this.state.match.club && this.state.match.club.location.coordinates[1];
    console.log("Club coordinates", long);

    // JOIN BUTTON DISABLE AFTER FULL MATCH LIST

    let joinbutton;

    if (userAppointed == false) {
      joinbutton = (
        <Link to={this.props._id} className="btn btn-success" onClick={() => this.joinMatch()}>
          Join the match
        </Link>
      );
    } else if (userAppointed == true) {
      joinbutton =
        <>
        <Link className="btn btn-warning">Alredy joined </Link>

      <Button className="btn  btn-danger" onClick={this.resign}>
                Resing form match Match
              </Button>
              </>
    } else if (participantLenght < 5) {
      joinbutton = (
        <>
        <Link to={this.props._id} className="btn btn-succes" onClick={() => this.joinMatch()}>
          Join the match
        </Link>

        <Button className="btn  btn-danger" onClick={this.resign}>
                Resing form match Match
              </Button>
              </>
      );
    } else {
      joinbutton = <Link className="btn btn-danger">Match Full</Link>;
    }

    return (
      <Container className="match-details">
        <section className="margin-top">
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
              <strong>Price:</strong> €{this.state.match.price}
              <hr></hr>
              <strong>Partecipants number:</strong> {participantLenght}
              <hr></hr>
              <br />

              {joinbutton}
              
              <Link to="/explore" className="btn btn-info">
                Volver
              </Link>
            </Col>

            <Col md={{ span: 6, offset: 0 }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE}`}
                loadingElement={<div style={{ height: `45vh` }} />}
                containerElement={<div style={{ height: `45vh` }} />}
                mapElement={<div style={{ height: `45vh` }} />}
                clubid={clubId}
                coordinates={{ lat, long }}
              />
            </Col>
          </Row>
          <Row>{this.state.match.participant && this.state.match.participant.map(matchs => <Partecipantlist key={matchs._id} {...matchs} />)}</Row>
        </section>
      </Container>
    );
  }
}

export default ExploreMatch;


