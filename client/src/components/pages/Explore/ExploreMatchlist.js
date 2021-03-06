import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Service from "../../../service/OrganizeMatch.service";
import { Link } from "react-router-dom";

import ExplorePlayerlist from "../Explore/ExplorePlayerlist";
import MatchDeails from "../Match/MatchDetails"



class MatchCard extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      showjoin: "true",
      initialized: false
    };
  }

 

componentDidMount = () => this.setState({initialized:true})


  render() {
    const { _id, name, owner, date, club, description, participant, imageUrl } = this.props;
    const timeCut = this.props.date;
    const timeCutSplice = timeCut.substr(0, 10);

    let arrayUser = participant && participant.map(elm => elm._id);
    // console.log("array id utenti presenti:", arrayUser);
    


    // console.log('ID UTENTE LOG:', this.props.id);
    
  
    // console.log("location",this.props.club.location.coordinates)

    return (
      <>
        <Container className="explore-card text-center ">
          <Card className="box" style={{ width: "45rem" }}>
            <Card.Img variant="top" src={club.imageUrl} alt={name} fluid />
            <Card.Body>
              <Card.Title>
                <h2>{name}</h2>
              </Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Title>Date del partido</Card.Title>
              <Card.Text>{timeCutSplice}</Card.Text>
              <Card.Title>Club del partido</Card.Title>
              <Card.Text>{club.name}</Card.Text>
              <Card.Title>Partecipants </Card.Title> <span>Number of partecipants {participant.length} </span>
              <br></br>
              <Row>{participant && participant.map(matchs => <ExplorePlayerlist loggedIn={this.props.id} key={matchs._id} {...matchs} />)}</Row>
              <Link className="btn btn-info" to={`/explorematch/${_id}`}>
                Ver detalles
              </Link>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default MatchCard;

