import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Partecipantlist from "./Partecipantlist";
import SimpleMap from "../map/SimpleMap"

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

    const club = this.state.match.club && this.state.match.club._id;
    console.log('club id',club)
    
     

     
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
                <small>Star Hour:</small> {this.state.match.starthour} | End Hours: {this.state.match.endhour}
              </p>
              <strong>Club:</strong> {club}
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
              <SimpleMap clubid={club} coordinates={{ lat, long }}></SimpleMap>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default MatchDetails;
