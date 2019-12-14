import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Service from "./service/Auth.service";

/* CUSTOM UI COMPONENTS */
import Navbar from "./components/ui/Navbar";

/* CUSTOM AUTH COMPONENTS */
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Profile from "./components/pages/Profile";

/* HOMEPAGE COMPONENTS */
import Home from "./components/pages/Home";

/* MATCH COMPONENTS */
import MatchDetails from "./components/pages/MatchDetails";
import EditMatch from "./components/pages/EditMatch";


/*EXPLORE COMPONENT */
import Explore from "./components/pages/Explore/Explore";

/* APP COMPONENT */
class App extends Component {
  constructor() {
    super();
    this.state = { loggedInUser: null };
    this._service = new Service();
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user });
    console.log("El método 'setTheUser' de App.js se ha invocado, pasando al estado 'loggedInUser:", this.state.loggedInUser);
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this._service
        .loggedin()
        .then(theLoggedInUserFromTheServer => this.setState({ loggedInUser: theLoggedInUserFromTheServer.data }))
        .catch(err => {
          this.setState({ loggedInUser: false });
          console.log({ err });
        });
    }
  };

  render() {
    this.fetchUser();

    return (
      <>
        <Navbar loggedInUser={this.state.loggedInUser} setUser={this.setTheUser} />
        
          <Route exact path="/" component={Home} />
          <Route path="/edit/:id" component={EditMatch} />
          <Route path="/explore" render={() => (this.state.loggedInUser ? <Explore loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />)} />
          <Route path="/match/:id" component={MatchDetails} />
          <Route path="/signup" render={match => <Signup setUser={this.setTheUser} {...match} />} />
          <Route path="/login" render={match => <Login setUser={this.setTheUser} {...match} />} />
          <Route path="/profile" render={() => (this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/" />)} />
        
      </>
    );
  }
}

export default App;
