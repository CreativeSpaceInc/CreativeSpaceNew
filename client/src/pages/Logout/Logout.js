//src/page/Login/Login.js
import React, { Component } from "react";
import { Nav, NavLi } from "../../components/Nav";
import { Container } from "../../components/Grid";
import { FormBtn } from "../../components/Form";

class Logout extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  };

  logout = event => {
    event.preventDefault();
    this.props.logoutArtist();
  };

  render() {
    return (
      <Container>
      <Nav>
          <NavLi>Home</NavLi>
          <NavLi>About</NavLi>
          <NavLi>My profile</NavLi>
      </Nav>
      <form>
        <h1 className="my-4"><i className="fa fa-sign-in"></i> Log Out</h1>
        <FormBtn
          onClick={this.logout}>Log Out
        </FormBtn>
      </form>
      <hr />
      <p><a href="/home">Home</a></p>
      </Container>
    );
  }
}

export default Logout;
