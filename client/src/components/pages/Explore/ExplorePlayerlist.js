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
       <Card style={{ width: "10rem"  }}>
                 <Card.Img style={{ width: "10rem" }} variant="top" src={imageUrl} />
                 <Card.Body>
                   <Card.Title>{username}</Card.Title>
                   <Card.Text>Preferred Role {role}</Card.Text>
                 </Card.Body>
        </Card>
        </>
    );
  }
};

export default ExplorePlayerlist;






