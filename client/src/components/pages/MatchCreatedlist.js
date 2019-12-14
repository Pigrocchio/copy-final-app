import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

class MatchCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, name, owner, date, description } = this.props;

    return (
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{date}</Card.Text>
          <Link className="btn btn-sm btn-dark" to={`/match/${_id}`}>
            Ver detalles
          </Link>

          <Link className="btn btn-sm btn-primary" to={`/edit/${_id}`} id={this._id}>
            Edit Match
          </Link>

          <Button className="btn btn-sm btn-warning" onClick={this.props.deleteMatch.bind(this, _id)}>
            Delete Match
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MatchCard;

{
  /* <Col className="match-card" md={4}>
      <section>
        <h3>{name}</h3>
        <p>{owner}</p>
        <small>{date}|</small>
        <br></br>
        <Link className="btn btn-sm btn-dark" to={`/coasters/${_id}`}>
          Ver detalles
        </Link>
      </section>
    </Col> */
}
