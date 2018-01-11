// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
import API from "../../utils/API";
import { Nav, NavLi } from "../../components/Nav";
import { DisplayMessage } from "../../components/DisplayMessage";
// import { Link } from "react-router-dom";
import { Addon, FormBtn, FormDiv, Input, Select, TextArea } from "../../components/Form";
import { Container } from "../../components/Grid";
import "./Upload.css";

class Upload extends Component {
  state = {
    url: "",
    medium: "",
    title: "",
    description: "",
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
      message: 'Success! Your creation has been saved.',
      className: "success" 
    });
  };
  failMessage = () => {
    this.setState({
      message: '* Please indicate a url, medium, and title',
      className: "danger"
    });
  };
  handleCreationSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.url && this.state.medium && this.state.title) {
      API.saveCreation({
        url: this.state.url,
        medium: this.state.medium,
        title: this.state.title,
        description: this.state.description,
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
          <NavLi href="/profile">Profile</NavLi>
          <NavLi href="/editprofile">Edit profile</NavLi>
          <NavLi href="/logout">Log out</NavLi>                    
        </Nav>
        <h1 className="my-4"><i className="fa fa-picture-o"></i> Upload Your Creation</h1>
        <DisplayMessage 
          value={this.state.message}
          className={this.state.className}>{this.state.message}
        </DisplayMessage>
        <form className="card-background">
          <FormDiv>
            <Input
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange}
              id="input-creation-url"
              placeholder="Creation URL (required)"
            />
          </FormDiv>
          <FormDiv>
            <div className="input-group">
              <Select 
                id="medium-dropdown"
                name="medium"
                value={this.state.medium}
                onChange={this.handleInputChange}>
                <option value="" selected>--</option>
                <option value="Artwork">Artwork</option>
                <option value="Music">Music</option>
                <option value="Writing">Writing</option>
                <option value="Video">Video</option>
              </Select>
              <Addon>Medium (required)</Addon>
            </div>
          </FormDiv>
          <FormDiv>
            <Input
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              id="input-creation-title"
              placeholder="Creation Title (required)"
            />
          </FormDiv>
          <FormDiv>
            <TextArea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              id="input-creation-description"
              placeholder="Creation Description" 
            />
          </FormDiv>
          <FormBtn
            id="save-creation"
            onClick={this.handleCreationSubmit}>Save Creation</FormBtn>
        </form>
      </Container>
    );
  }
}

export default Upload;