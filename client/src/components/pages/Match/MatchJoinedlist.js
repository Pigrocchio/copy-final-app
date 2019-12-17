import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import MatchDetails from "./MatchDetails";

class MatchJoinedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, name, owner, date, description, loggedInUser } = this.props;
    console.log('ID DETAIL',this.props.loggedInUser._id);
    console.log('MATCH DETAIL',this.props.matchdetail);
    return (
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Link className="btn btn-sm btn-dark" loggedInUser={this.props.loggedInUser} to={`/match/${_id}`}>
            Ver detalles
          </Link>
           </Card.Body>
      </Card>
    );
  }
}

export default MatchJoinedList;
