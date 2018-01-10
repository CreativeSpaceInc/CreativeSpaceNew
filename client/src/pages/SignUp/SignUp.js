// client/src/pages/Profile/Signup.js
import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import { FormBtn, FormDiv, Input } from "../../components/Form";
// import { Link } from "react-router-dom";

class Signup extends Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(null === this.props.validateForm()){
      alert('All fields are required.');
      return;
    } else {
      this.props.registerArtist();
    }
  };


  render() {
    return (
      <Container>
        <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
          <NavLi>Log in</NavLi>
        </Nav>
        <h1 className="my-4"><span className="fa fa-user-plus"></span> Sign up</h1>
        <form>
          <FormDiv>
            <label>Display Name</label>
            <Input
              value={this.props.displayname}
              onChange={this.props.handleInputChange}
              placeholder="Display name"
              name="displayname"
            />
          </FormDiv>
          <FormDiv>
            <label>Username</label>
            <Input
              value={this.props.username}
              onChange={this.props.handleInputChange}
              placeholder="Username"
              name="username"
            />
          </FormDiv>
          <FormDiv>
            <label>Password</label>
            <Input
              type="password"
              value={this.props.password}
              onChange={this.props.handleInputChange}
              placeholder="Password"
              name="password"
            />
          </FormDiv>
          <FormBtn onClick={this.handleFormSubmit}>
            Sign up
          </FormBtn>
        </form>
        <hr/>
        <p>Already have an account? <a href="/login">Log in</a></p>
        <p>Or click <a href="/home">Home</a></p>
      </Container>
    );
  }
}
//
export default Signup;
