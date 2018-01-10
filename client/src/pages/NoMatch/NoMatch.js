import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Nav, NavLi } from "../../components/Nav";

const NoMatch = () =>
  <Container>
    <Nav>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/search">Search</NavLi>
      <NavLi href="/login">Log in</NavLi>
      <NavLi href="/signup">Sign up</NavLi> 
    </Nav>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;

export default NoMatch;