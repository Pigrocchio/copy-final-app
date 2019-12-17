import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { CardText } from "react-bootstrap/Card";


class Partecipantlist extends Component {
  constructor(props) {
    super (props)
    
  }

  render() {
    const { _id, username, imageUrl, role, description } = this.props; 

             return (
               <Card style={{ width: "10rem" }}>
                 <Card.Img style={{ width: "10rem" }} variant="top" src={imageUrl} />
                 <Card.Body>
                   <Card.Title>{username}</Card.Title>
                   <Card.Text>Preferred Role {role}</Card.Text>
                 </Card.Body>
               </Card>
             );
           }
};

export default Partecipantlist;






