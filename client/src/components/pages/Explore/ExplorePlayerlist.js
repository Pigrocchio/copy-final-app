import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";




class ExplorePlayerlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let idUser = this.props.loggedIn
    console.log('id llegato a componet correcto user logeado:', idUser);

    const { _id, username, imageUrl, role, description } = this.props;
    console.log("este es el id del props eventos ", _id)

    
    // if (idUser == this.props._id) {
    //   console.log("uguali");
    //   this.props.prova();
    // } else {
    //   console.log("nada");
    // }


console.log()
    return (
      <>
      <Card
        style={{
          width: "7rem",
          margin: "2px",
          textAlign: "center",
          backgroundColor: "beige"
        }}
      >
        <Card.Body>
         <Card.Text>{username}</Card.Text>
        </Card.Body>
      </Card>
      
        </>
    );
  }
};

export default ExplorePlayerlist;






