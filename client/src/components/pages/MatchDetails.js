import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Partecipantlist from "../pages/Partecipantlist";

import OrganizeMatchsService from "../../service/OrganizeMatch.service";

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
    console.log('populated club:', this.state.match.club);
    console.log("populated partecipant:", this.state.match.participant);

    const cut = this.state.match.date && this.state.match.date.substr(0, 10);
    console.log(cut);

    
    const club = this.state.match.club && this.state.match.club.name;
    console.log('Club detail:',club);

     
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
              <Row>
                {this.state.match.participant && this.state.match.participant.map(matchs => (
                  <Partecipantlist
                    key={matchs._id}
                    {...matchs}
                    
                  />
                ))}
              </Row>
              <Link to="/profile" className="btn btn-dark">
                Volver
              </Link>
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
              >
                {/* <Marker lat={40.73} lng={-73.93} /> */}
              </GoogleMapReact>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default MatchDetails;
