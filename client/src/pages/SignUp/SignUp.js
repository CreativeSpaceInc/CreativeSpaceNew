// client/src/pages/Profile/Signup.js
import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { DisplayMessage } from "../../components/DisplayMessage";
import { Nav, NavLi } from "../../components/Nav";
import { FormBtn, FormDiv, Input } from "../../components/Form";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import "./SignUp.css";

class Signup extends Component {
  state = {
    displayname: "",
    username: "",
    password: "",
    artist: "5a34a9d1afaabc1820db0b32",
    message: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  successMessage = () => {
    this.setState({ 
      message: 'Success! You have signed up.',
      className: "success"
    });
  };
  failMessage = () => {
    this.setState({
      message: 'Registration failed. Please try again.',
      className: "danger"
    });
  };
  handleArtistSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.displayname && this.state.username && this.state.password) {
      API.saveArtist({
        displayname: this.state.displayname,
        username: this.state.username,
        password: this.state.password,
        artist: this.state.artist
      })
        .then(this.successMessage())
        .catch(err => console.log(err));
    } else {
      this.failMessage();
    }
  };

  render() {
    return (
      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/search">Search</NavLi>
          <NavLi href="/login">Log in</NavLi> 
        </Nav>
        <h1 className="my-4"><span className="fa fa-user-plus"></span> Sign up</h1>
        <DisplayMessage 
          value={this.state.message}
          className={this.state.className}>{this.state.message}
        </DisplayMessage>        
        <form className="card-background" action="/upload" method="get">
          <FormDiv>
            <Input
              value={this.state.displayname}
              onChange={this.handleInputChange}
              placeholder="Display name"
              name="displayname"
            />
          </FormDiv>
          <FormDiv>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              placeholder="Username"
              name="username"
            />
          </FormDiv>
          <FormDiv>
            <Input 
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="Password"
              name="password"
            />
          </FormDiv>
          <FormBtn
            onClick={this.handleArtistSubmit}>Sign up
          </FormBtn>
        </form>
        <hr />
        <p>Already have an account? <a href="/login">Log in</a></p>
        <p>Or return <a href="/home">Home</a></p>
      </Container>
    );
  }
}
export default Signup;