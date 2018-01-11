import React, { Component } from "react";
import API from "../../utils/API";
import { DisplayMessage } from "../../components/DisplayMessage";
import { Link } from "react-router-dom";
import { Nav, NavLi } from "../../components/Nav";
import { Container } from "../../components/Grid";
import { FormBtn, FormDiv, Input } from "../../components/Form";
import "./Login.css";

class Login extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: "",
    artist: "5a34a9d1afaabc1820db0b32",
    message: ""
  };
  // handle any changes to the input fields
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  successMessage = () => {
    this.setState({ 
      message: 'Success! You have logged in.',
      className: "success"
    });
  };
  failMessage = () => {
    this.setState({
      message: '* Registration failed. Please try again.',
      className: "danger"
    });
  };
  // When the form is submitted, prevent the default event and alert the username and password
  handleLoginSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.getArtist({
        username: this.state.username,
        password: this.state.password
      })
      .then(this.successMessage())
      .catch(err => console.log(err))
    } else {
      this.failMessage()
    }
  };

  render() {
    return (
      <Container>
      <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/search">Search</NavLi>
          <NavLi href="/signup">Sign up</NavLi> 
      </Nav>
      <h1 className="my-4"><i class="fa fa-sign-in"></i> Log in</h1>
      <form className="card-background">
        <DisplayMessage 
          value={this.state.message}
          className={this.state.className}>{this.state.message}
        </DisplayMessage> 
        <FormDiv>
          <Input
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormDiv>
        <FormDiv>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </FormDiv>
        <FormBtn 
          onClick={this.handleLoginSubmit}>Log in
        </FormBtn>
      </form>
      <hr />
      <p>Don't have an account? <a href="/">Sign up</a></p>
      <p>Or return <a href="/">Home</a></p>
      </Container>
    );
  }
}

export default Login;