import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import OrganizeMatchsService from "../../../service/OrganizeMatch.service";
import ClubService from "../../../service/Club.service";

class EditMatch extends Component {
  constructor(props) {
    super(props);
    this._organizeMatchsService = new OrganizeMatchsService();
      this._clubservice = new ClubService();
      this._service = new OrganizeMatchsService();

    this.state = {
      disabledButton: false,
      buttonText: "Edit the match details",
      clubList: [],
      match: {
        name: "",
        description: "",
        date: "",
        starthour: "",
        endhour: "",
        participant: [],
        owner: "",
        price: 0,
        club: ""
      }
    };
  }

  componentDidMount = () => this.importClubList()

  importClubList = () => {
          this._clubservice
      .getAllClub()
        .then(allClubFromDB => {
          console.log('Data from Club llega bien', allClubFromDB.data);
          console.log("Aqui intendo di hacer llegar los datos dell _id de fuera", this.props.match.params.id);
            this.setState({ clubList: allClubFromDB.data });   
          this.updateState()  
        }).catch(err => console.log("Error", err));
      
  };
    
    
    updateState = () => {
        console.log('ciao')
    const MatchId = this.props.match.params.id;
    this._service
      .getOneMatch(MatchId)
      .then(theMatch => this.setState({ match: theMatch.data }))
      .catch(err => console.log(err));
}
    
    
    
  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      match: { ...this.state.match, [name]: value }
    });
  };

    handleSubmit = e => {
        const id = this.props.match.params.id;
        const match = this.state.match;
    e.preventDefault();
    this._organizeMatchsService
      .postEditMatch(id, match)
      .then(x => {
        console.log("editato", this.props.match.params.id);        
        this.updateState(this.state);
        // console.log("user id", this.props.loggedInUser._id);
      })
      .catch(err => console.log(err));
  };

  render() {
      return (
        <Container className="margin-top">
          <h1>Edit the Match Details</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder={this.state.match.name} type="text" name="name" onChange={this.handleInputChange} value={this.state.match.name} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <textarea
                placeholder={this.state.match.description}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                name="description"
                onChange={this.handleInputChange}
                value={this.state.match.description}
              />

              {/* <Form.Control type="text" name="description" onChange={this.handleInputChange} value={this.state.match.description} /> */}
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control placeholder={this.state.match.date} type="date" name="date" onChange={this.handleInputChange} value={this.state.match.date} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Hour</Form.Label>
              <Form.Control
                placeholder={this.state.match.starthour}
                type="time"
                name="starthour"
                onChange={this.handleInputChange}
                value={this.state.match.starthour}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Hour</Form.Label>
              <Form.Control
                placeholder={this.state.match.endhour}
                type="time"
                name="endhour"
                onChange={this.handleInputChange}
                value={this.state.match.endhour}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control placeholder={this.state.match.price} type="number" name="price" onChange={this.handleInputChange} value={this.state.match.price} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select a Number</Form.Label>
              <select name="club" value={this.state.match.club} onChange={this.handleInputChange}>
                <option disabled value>
                  Select an option
                </option>
                {this.state.clubList.map((elm, idx) => (
                  <option key={idx} value={elm._id}>
                    {elm.name}
                  </option>
                ))}
              </select>
            </Form.Group>

            <Button variant="dark" size="sm" type="submit" disabled={this.state.disabledButton}>
              {this.state.buttonText}
            </Button>
            <Link to="/profile" className="btn btn-sm btn-primary">
              Back
            </Link>
          </Form>
        </Container>
      );
  }
}

export default EditMatch;
