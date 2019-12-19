import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




class ExplorePlayerlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let idUser = this.props.loggedIn
    // console.log('id llegato a componet correcto user logeado:', idUser);

    const { _id, username, imageUrl, role, description } = this.props;
    // console.log("este es el id del props eventos ", _id)

    
  


console.log()
    return (
      <>
        <Card
          style={{
            width: "10rem",
            margin: "2px",
            textAlign: "center",
            backgroundColor: "beige"
          }}
        >
          <Card.Body>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Text>{username}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
};

export default ExplorePlayerlist;






