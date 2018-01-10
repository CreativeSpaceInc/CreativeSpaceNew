//src/page/Login/Login.js
import React, { Component } from "react";
import { Nav, NavLi } from "../../components/Nav";
import { Container } from "../../components/Grid";
import { FormBtn, FormDiv, Input } from "../../components/Form";

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };


  handleFormSubmit = event => {
    var obj = this;
    event.preventDefault();
    if(null === obj.props.validateLoginForm()){
      alert('All fields are required.');
      return;
    } else {
      this.props.loginArtist();
    }
  };

  render() {
    return (
      <Container>
      <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
          <NavLi>Sign up</NavLi>
      </Nav>
      <form>
        <h1 className="my-4"><i className="fa fa-sign-in"></i> Log in</h1>
        <FormDiv>
          <Input
            placeholder="Username"
            name="username"
            value={this.props.username}
            onChange={this.props.handleInputChange}
          />
        </FormDiv>
        <FormDiv>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.props.password}
            onChange={this.props.handleInputChange}
          />
        </FormDiv>
        <FormBtn
          onClick={this.handleFormSubmit}>Log in
        </FormBtn>
      </form>
      <hr />
      <p>Don't have an account? <a href="/">Sign up</a></p>
      <p>Or click <a href="/home">Home</a></p>
      </Container>
    );
  }
}

export default Login;
