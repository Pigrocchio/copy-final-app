import React, { Component } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Service from "../../../service/OrganizeMatch.service";
import { Link } from "react-router-dom";

import ExplorelistPlayer from "../Explore/ExplorelistPlayer";

class MatchCard extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      showjoin: "true"
    };
    
  }



  

  joinMatch = () => {
    console.log("id match", this.props._id);
    const matchId = this.props._id;
    const personId = this.props.id;
    console.log("id person", personId);
    this._service
      .joinMatch(personId, matchId)
      .then(x => this.props.updatelist())
      .catch(err => console.log(err));
  };

 render() {
 const { _id, name, owner, date, club, description, participant } = this.props;
 const timeCut = this.props.date;
 const timeCutSplice = timeCut.substr(0, 10);
    let prova = participant && participant.map(elm => console.log(elm._id))

        let showjoin = this.state.showjoin;
        let joinbutton;

        if (participant.length < 3) {
          joinbutton = (
            <Link className="btn btn-sm btn-warning" onClick={() => this.joinMatch()}>
              Join the match
            </Link>
          );
        } else {
          joinbutton = (  
          <Link className="btn btn-sm btn-warning" >
             Match Full
            </Link>
          )
        }
   
   

    return (
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title>Date del partido</Card.Title>
          <Card.Text>{timeCutSplice}</Card.Text>
          <Card.Title>Club del partido</Card.Title>
          <Card.Text>{club.name}</Card.Text>
          <Card.Title>Partecipants </Card.Title> <span>Number of partecipants {participant.length} </span>
          <Row>
            {participant &&
              participant.map(matchs => <ExplorelistPlayer  loggedIn={this.props.id} key={matchs._id} {...matchs} />)}
          </Row>
          {joinbutton}
        </Card.Body>
      </Card>
    );
  }
}

export default MatchCard;

