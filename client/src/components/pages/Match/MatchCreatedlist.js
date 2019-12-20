import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import MatchDetails from "./MatchDetails"

class MatchCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, name, owner, date, description, loggedInUser } = this.props;

    const datecut = this.props.date && this.props.date.substr(0, 10);
// console.log(this.props.loggedInUser._id);
    return (
      <Container>
        <Card className="box" style={{ width: "30rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{datecut}</Card.Text>
            <Link className="btn  btn-info" loggedInUser={this.props.loggedInUser} to={`/match/${_id}`}>
              Ver detalles
            </Link>
            <Link className="btn  btn-dark" to={`/edit/${_id}`} id={this._id}>
              Edit Match
            </Link>
            <Button variant="outline-warning" onClick={this.props.deleteMatch.bind(this, _id)}>
              Delete Match
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default MatchCard;

