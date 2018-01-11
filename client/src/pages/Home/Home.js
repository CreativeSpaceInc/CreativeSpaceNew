// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { ArchImg } from "../../components/Archives";
import { CarA, CarDiv, CarImg, CarItem, CarLi } from "../../components/Carousel";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";

class Home extends Component {
  state = {
    artist: "5a34a9d1afaabc1820db0b32"
  };

  render() {
    return (
      <div>
      <Container>
        <Nav>
          <NavLi href="/">Home</NavLi>
          <NavLi href="/about">About</NavLi>
          <NavLi href="/search">Search</NavLi>
          <NavLi href="/profile">Profile</NavLi>
          <NavLi href="/login">Log in</NavLi>
          <NavLi href="/signup">Sign up</NavLi>          
        </Nav>
        <br /><br />
        <Row>
          <div className="col-lg-3 col-md-3">
            <h2 className="my-4 rotate">Browse Creations:</h2>
            <div className="list-group">
              <a href="#" className="list-group-item mouseoverStyle">Artwork</a>
              <a href="#" className="list-group-item mouseoverStyle">Music</a>
              <a href="#" className="list-group-item mouseoverStyle">Writing</a>
              <a href="#" className="list-group-item mouseoverStyle">Video</a>
            </div>
          </div>
          <div id="carouselExampleSlidesOnly" className="carousel slide col-lg-9 col-md-9" data-ride="carousel">
            <CarDiv>
              <ol className="carousel-indicators" style={{borderBottom:"0px"}}>
                <CarLi data-slide-to="0" className="active"></CarLi>
                <CarLi data-slide-to="1"></CarLi>
                <CarLi data-slide-to="2"></CarLi>
                <CarLi data-slide-to="3"></CarLi>
              </ol>
              <CarItem className="carousel-item active">
                <CarImg 
                  src="http://placehold.it/900x350" 
                  alt="First slide"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  src="http://placehold.it/900x350" 
                  alt="Second slide"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  src="http://placehold.it/900x350" 
                  alt="Third slide"></CarImg>
              </CarItem>
              <CarItem>
                <CarImg 
                  src="http://placehold.it/900x350" 
                  alt="Fourth slide"></CarImg>
              </CarItem>
            </CarDiv>
            <CarA 
              className="carousel-control-prev" 
              data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only">Previous</span>
            </CarA>
            <CarA 
              className="carousel-control-next" 
              data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </CarA>
          </div>
        </Row>
        <br /><br />
        <Row>
          <Col size="sm-6 md-3" className="mb-4" name="1">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="1">
              </ArchImg>
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="2">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="2" />
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="3">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="3" />
              <p>Creation Title</p>
            </a>
          </Col>
          <Col size="sm-6 md-3" className="mb-4" name="4">
            <a href="/">
              <ArchImg
                src="http://placehold.it/500x300"
                name="4" />
              <p>Creation Title</p>
            </a>
          </Col>

        </Row>
           
      </Container>
      </div>
    );
  }
}
export default Home;

