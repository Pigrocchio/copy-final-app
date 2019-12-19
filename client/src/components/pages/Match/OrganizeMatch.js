import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

import OrganizeMatchsService from "../../../service/OrganizeMatch.service";
import ClubList from "../../../service/Club.service";


class OrganizeMatch extends Component {
  constructor(props) {
    super(props);
    this._organizeMatchsService = new OrganizeMatchsService();
    this._clubList = new ClubList();

    this.state = {
      disabledButton: false,
      buttonText: "Organize a new event",
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

  componentDidMount = () => this.importClubList();

  importClubList = () => {
    this._clubList
      .getAllClub()
      .then(allClubFromDB => {
        console.log(allClubFromDB.data)
        this.setState({ clubList: allClubFromDB.data })
        console.log(this.state.clubList);
      })
      .catch(err => console.log("Error", err));
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({
      match: { ...this.state.match, [name]: value, owner: this.props.loggedInUser._id }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this._organizeMatchsService
      .postOrganizeMatch(this.state.match)
      .then(x => {
        console.log("creato", this.state.match);
        this.props.closeModalWindow();
        this.props.updatematch()
        console.log("user id", );
        
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.match.name} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descripción</Form.Label>
          <textarea
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
          <Form.Control type="date" name="date" onChange={this.handleInputChange} value={this.state.match.date} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Start Hour</Form.Label>
          <Form.Control type="time" name="starthour" onChange={this.handleInputChange} value={this.state.match.starthour} />
        </Form.Group>

        <Form.Group>
          <Form.Label>End Hour</Form.Label>
          <Form.Control type="time" name="endhour" onChange={this.handleInputChange} value={this.state.match.endhour} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" onChange={this.handleInputChange} value={this.state.match.price} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Select a Club</Form.Label>
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
      </Form>
    );
  }
}

export default OrganizeMatch;
