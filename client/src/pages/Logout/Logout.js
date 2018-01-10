//src/page/Login/Login.js
import React, { Component } from "react";
import { FormBtn, FormDiv } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

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
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/search">Search</NavLi>
          <NavLi href="/profile">Profile</NavLi>
          <NavLi href="/editprofile">Edit profile</NavLi>
          <NavLi href="/update">Update</NavLi>
        </Nav>
        <Row>
          <Col size="md-8">
          <h1 className="my-4"><i className="fa fa-sign-out"></i> Log Out</h1>
          <hr />
          <h3> Click to log out </h3>
          <form className="card-background">
              <FormBtn
                className="btn btn-block btn-lg"
                onClick={this.logout}>Log Out
              </FormBtn>
          </form>
          <hr />
          </Col>
        </Row>
        <p>Not looking to log out? Return <a href="/">Home</a></p>
      </Container>
    );
  }
}

export default Logout;
