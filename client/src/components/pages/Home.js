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
             console.log("ddd", this.props.loggedInUser);

             // Sign Up BUTTON DISABLE AFTER FULL MATCH LIST
let userAppointed = this.props.loggedInUser
             let signupbutton;

             if (userAppointed == false) {
               signupbutton = (
                 <>
                  <Link className="btn btn-success" to="/login">
                     LOGIN{" "}
                   </Link>
                   <Link className="btn btn-primary" to="/signup">
                     SIGN UP{" "}
                   </Link>
                   </>
               )
    } else if (userAppointed == true) {
      signupbutton = <p></p>;
    }
             

             return (
               <Container className="margin-top">
                 <section>
                   <div className="">
                     <div className="container text-center">
                       <h1>Having a hard time organizing soccer matches with your friends?</h1>
                       <h2 className="lead">
                         Makes it easy to manage Futsal match, invite players and keep track of your match. Participate in events and tournaments. Create your
                         profile. If you play Futsal, this is your app!
                       </h2>
                       <img
                         src="https://res.cloudinary.com/deht3vcvn/image/upload/v1576830402/appfinaltest/imagehome_rzuunm.png"
                         className="homeimage"
                         alt=""
                         fluid
                       ></img>
                     </div>
                   </div>
                 </section>
                 <section className="margin-bottom container text-center">
                  {signupbutton}
                 </section>
               </Container>
             );
           };
}

export default Home;
