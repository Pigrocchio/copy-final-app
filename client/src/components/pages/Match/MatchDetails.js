import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WrappedMap from "../map/NewSingleMap";
import Partecipantlist from "./Partecipantlist";



import OrganizeMatchsService from "../../../service/OrganizeMatch.service";

class MatchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { match: {} };
    this._service = new OrganizeMatchsService();
  }

  componentDidMount = () => {
    const MatchId = this.props.match.params.id;
    this._service
      .getOneMatch(MatchId)
      .then(theMatch => this.setState({ match: theMatch.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log('this.state general:',this.state.match);
    // console.log('populated club:', this.state.match.club);
    // console.log("populated partecipant:", this.state.match.participant);
 
    const datecut = this.state.match.date && this.state.match.date.substr(0, 10);
    
    const participant = this.state.match.participant && this.state.match.participant.length;

    const lat = this.state.match.club && this.state.match.club.location.coordinates[0];
    console.log(lat);
    
const long = this.state.match.club && this.state.match.club.location.coordinates[1];
console.log(long);

    const clubid = this.state.match.club && this.state.match.club._id;
    const clubname = this.state.match.club && this.state.match.club.name;
    
     

     
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
                <strong>Date:</strong> <p>{datecut}</p>
                <small>Star Hour:</small> {this.state.match.starthour} | <small>End Hours:</small> {this.state.match.endhour}
              </p>
              <strong>Club:</strong> {clubname}
              <hr></hr>
              <strong>Partecipants number:</strong> {participant}
              <hr></hr>
              <Row>{this.state.match.participant && this.state.match.participant.map(matchs => <Partecipantlist key={matchs._id} {...matchs} />)}</Row>
              <br />
              <Link to="/profile" className="btn btn-dark">
                Volver
              </Link>
            </Col>

            <Col md={{ span: 6, offset: 0 }}>
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE}`}
                loadingElement={<div style={{ height: `45vh` }} />}
                containerElement={<div style={{ height: `45vh` }} />}
                mapElement={<div style={{ height: `45vh` }} />}
                clubid={clubid}
                coordinates={{ lat, long }}
              />
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default MatchDetails;
