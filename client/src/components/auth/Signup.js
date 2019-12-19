import React, { Component } from "react";
import { Button, Form, Container, Toast } from "react-bootstrap";

import Service from "../../service/Auth.service";
import FilesService from "../../service/Files.service";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this._filesService = new FilesService();
    this.state = {
      username: "",
      password: "",
      imageUrl: "",
      email: "",
      birthDate: 0,
      role: [],
      location: { type: { type: String }, coordinates: [Number] },
      buttonText: "Crear montaña rusa",
      disabledButton: false,
      showToast: false,
      toastText: "",
      
    };
  }

  handleInputChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, birthDate, email, imageUrl, role, location } = this.state; // --> obj decostrunting = usernmae = this.state.username, password = this.state password
    this._service
      .signup(username, password, birthDate, email, imageUrl, role, location) //theNewuser = il ritorno di this service sign up
      .then(theNewUser => {
        console.log(theNewUser.data);
        this.props.setUser(theNewUser.data);
        this.setState({ username: "", password: "" });
        this.props.history.push("/"); // REDIRECCIONAMIENTO
      })
      .catch(err => {
        console.log(err);
        this.handleToastOpen(err.response.data.message);
      });
  };

  handleFileUpload = e => {
    this.setState({ disabledButton: true, buttonText: "Subiendo imagen..." });

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this._filesService
      .handleUpload(uploadData)
      .then(response => {
        console.log("Subida de archivo finalizada! La URL de Cloudinray es: ", response.data.secure_url);
        this.setState({
          disabledButton: false,
          buttonText: "Crear perfil",
          imageUrl: response.data.secure_url
        });
        console.log(this.state.imageUrl);
      })
      .catch(err => console.log(err));
  };

  handleToastClose = () => this.setState({ showToast: false, toastText: "" });
  handleToastOpen = text => this.setState({ showToast: true, toastText: text });

  render() {
    return (
      <Container>
        <h1>Sign Up</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="text" name="password" onChange={this.handleInputChange} value={this.state.password} />
          </Form.Group>

          <Form.Group>
            <Form.Label>email</Form.Label>
            <Form.Control type="text" name="email" onChange={this.handleInputChange} value={this.state.email} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Fecha nacimiento</Form.Label>
            <Form.Control type="date" name="birthDate" onChange={this.handleInputChange} value={this.state.birthDate} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Imagen URL (archivo)</Form.Label>
            <Form.Control name="imageUrl" type="file" onChange={this.handleFileUpload} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Select our Role</Form.Label>
            <select name="role" selected={this.state.role} onChange={this.handleInputChange}>
              <option value="GK">Select a role</option>
              <option value="GK"> GK</option>
              <option value="DEF">DD</option>
              <option value="CC">CC</option>
              <option value="ATT">ATT</option>
            </select>
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>Location</Form.Label>

            <input type="text" name="latitude" placeholder="latitude" value={this.state.location[0]} onChange={this.handleInputChange} />
            <input type="text" name="longitude" placeholder="longitude" value={this.state.location[1]} onChange={this.handleInputChange} />
          </Form.Group> */}

          <Button variant="dark" type="submit">
            Registrarme
          </Button>
        </Form>

        <Toast
          onClose={this.handleToastClose}
          show={this.state.showToast}
          delay={3000}
          autohide
          style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            minWidth: "250px"
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Error</strong>
            <small>Session manager</small>
          </Toast.Header>
          <Toast.Body>{this.state.toastText}</Toast.Body>
        </Toast>
      </Container>
    );
  }
}

export default SignupForm;
