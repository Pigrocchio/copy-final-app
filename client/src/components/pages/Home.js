import React from "react";
// import { Container, Row } from "react-bootstrap";
import { Container, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signup from "../auth/Signup";



class Home extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
      showModalWindow: false
    }
  }

  handleShow = () => this.setState({ showModalWindow: true })
  handleClose = () => this.setState({ showModalWindow: false })

  render() {

    return (
      <Container>
        <section>
          <div className="jumbotron">
            <h1>Having a hard time organizing soccer matches with your friends?</h1>

            <div className="container text-left">
              <img src="../../images/beers.png" className="d-block w-100" alt=""></img>
              <h2 className="lead">
                Makes it easy to manage RSVP, invite players and communicate with your soccer buddies. Keep track of
                your statistics. Participate in events and tournaments. Create your profile. If you play football, this
                is the best app! 
              </h2>
          <Button variant="dark" onClick={this.handleShow}>
            Sign Up
          </Button>
            </div>
          </div>


          <Modal show={this.state.showModalWindow} onHide={this.handleClose} >
            <Modal.Header closeButton>
              <Modal.Title>Sign Up form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Signup closeModalWindow={this.handleClose} />
            </Modal.Body>
          </Modal>
        </section>
      </Container>
    );
  };
}

export default Home;
