// client/src/pages/Profile/Profile.js
import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { DisplayMessageTiny } from "../../components/DisplayMessage";
import { Addon, FormBtn, FormDiv, Input, Select, TextArea } from "../../components/Form";
import { Col, Container, Row } from "../../components/Grid";
import { Nav, NavLi } from "../../components/Nav";
import API from "../../utils/API";
import "./Editprofile.css";

class Editprofile extends Component {
  state = {
    url: "",
    medium: "",
    title: "",
    description: "",
    displayname: "",
    avatar: "",
    bio: "",
    username: "",
    email: "",
    occupation: "",
    location: "",
    artist: "5a34a9d1afaabc1820db0b32",
    creationMessage: "",
    displaynameMessage: "",
    avatarMessage: "",
    bioMessage: "",
    usernameMessage: "",
    emailMessage: "",
    occupationMessage: "",
    locationMessage: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
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
        .then(this.setState({
          creationMessage: 'Success! Your profile has been updated.',
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: "",
          locationMessage: "",  
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: '* Please indicate a URL, medium, and title.',
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: "",
        locationMessage: "", 
        className: 'danger'
      });
    }
  };
  handleDisplaynameSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.displayname) {
      API.saveArtist({
        displayname: this.state.displayname,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: 'Success! Your profile has been updated.',
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: "",
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: '* Please enter at least one character in the field.',
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: "",
        locationMessage: "",
        className: 'danger'
      });
    }
  };
  handleAvatarSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.avatar) {
      API.saveArtist({
        avatar: this.state.avatar,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: 'Success! Your profile has been updated.',
          bioMessage: "",
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: "",
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: '* Please enter at least one character in the field.',
        bioMessage: "",
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: "",
        locationMessage: "",
        className: "danger"
      });
    }
  };
  handleBioSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.bio) {
      API.saveArtist({
        bio: this.state.bio,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: 'Success! Your profile has been updated.',
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: "",
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: '* Please enter at least one character in the field.',
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: "",
        locationMessage: "",
        className: "danger"
      });
    }
  };
  handleUsernameSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.username) {
      API.saveArtist({
        username: this.state.username,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: 'Success! Your profile has been updated.',
          emailMessage: "",
          occupationMessage: "",
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: '* Please enter at least one character in the field.',
        emailMessage: "",
        occupationMessage: "",
        locationMessage: "",
        className: 'danger'
      });
    }
  };
  handleEmailSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.email) {
      API.saveArtist({
        email: this.state.email,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: "",
          emailMessage: 'Success! Your profile has been updated.',
          occupationMessage: "",
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: "",
        emailMessage: '* Please enter at least one character in the field.',
        occupationMessage: "",
        locationMessage: "",
        className: "danger"
      });
    }
  };
  handleOccupationSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.occupation) {
      API.saveArtist({
        occupation: this.state.occupation,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: 'Success! Your profile has been updated.',
          locationMessage: "",
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: '* Please enter at least one character in the field.',
        locationMessage: "",
        className: "danger"
      });
    }
  };
  handleLocationSubmit = event => {
    event.preventDefault();
    console.log('the button was clicked');
    if (this.state.location) {
      API.saveArtist({
        location: this.state.location,
        artist: this.state.artist
      })
        .then(this.setState({
          creationMessage: "",
          displaynameMessage: "",
          avatarMessage: "",
          bioMessage: "",
          usernameMessage: "",
          emailMessage: "",
          occupationMessage: "",
          locationMessage: 'Success! Your profile has been updated.',
          className: 'success'
        }))
        .catch(err => console.log(err));
    } else {
      this.setState({
        creationMessage: "",
        displaynameMessage: "",
        avatarMessage: "",
        bioMessage: "",
        usernameMessage: "",
        emailMessage: "",
        occupationMessage: "",
        locationMessage: '* Please enter at least one character in the field.',
        className: "danger"
      });
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
          <NavLi href="/upload">Upload</NavLi>
          <NavLi href="/logout">Log out</NavLi>                    
        </Nav>
        <Row>
          <Col size="md-8">
            <a href="/editprofile"><h2 className="my-4" style={{textDecoration:"underline"}}><i className="fa fa-pencil-square-o" ></i>Edit My Profile</h2></a>
          </Col>
          <Col size="md-4">
            <a href="/profile"><h2 className="my-4"><i className="fa fa-eye"></i> View My Profile</h2></a>
          </Col>
        </Row><hr />
        <Row>
          <Col size="md-8">
            <h3 className="my-4">Add Creation</h3>
            <DisplayMessageTiny 
              value={this.state.creationMessage}
              className={this.state.className}>{this.state.creationMessage}
            </DisplayMessageTiny>
            <form className="card-background">
              <FormDiv>
                <Input 
                  id="input-creation-url"
                  name="url"
                  value={this.state.url}
                  placeholder="Creation URL (required)"
                  onChange={this.handleInputChange} />
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
                  id="input-creation-title"
                  name="title"
                  value={this.state.title}
                  placeholder="Creation Title (required)"
                  onChange={this.handleInputChange} />
              </FormDiv>            
              <FormDiv>
                <TextArea 
                  id="input-creation-description"
                  name="description"
                  value={this.state.description}
                  placeholder="Creation Description"
                  type="text" 
                  onChange={this.handleInputChange} />
                <FormBtn
                  id="save-creation-description" 
                  disabled={!(this.state.url && this.state.medium && this.state.title)}
                  onClick={this.handleCreationSubmit}>Save Changes
                </FormBtn>
              </FormDiv>            
            </form>
          </Col> 
          <Col size="md-4">
            <h3 className="my-4">Artist Details</h3>
            <form className="card-background">              
              <DisplayMessageTiny 
                value={this.state.displaynameMessage}
                className={this.state.className}>{this.state.displaynameMessage}
              </DisplayMessageTiny>
              <FormDiv>         
                <Input 
                  id="input-display-name"
                  name="displayname"
                  value={this.state.displayname}
                  onChange={this.handleInputChange}
                  placeholder="Display Name" />
                <FormBtn 
                  id="save-display-name"
                  onClick={this.handleDisplaynameSubmit}>Save Changes</FormBtn>
              </FormDiv>
              <FormDiv>
                <label>(Avatar will be displayed within 150px by 150px)</label>
                <DisplayMessageTiny 
                  value={this.state.avatarMessage}
                  className={this.state.className}>{this.state.avatarMessage}
                </DisplayMessageTiny>
                <Input 
                  id="input-avatar"
                  name="avatar"
                  value={this.state.avatar}
                  onChange={this.handleInputChange}
                  placeholder="Avatar URL" />
                <FormBtn
                  id="save-avatar"
                  onClick={this.handleAvatarSubmit}>Save Changes</FormBtn>
              </FormDiv>
              <DisplayMessageTiny 
                value={this.state.bioMessage}
                className={this.state.className}>{this.state.bioMessage}
              </DisplayMessageTiny>
              <FormDiv>
                <TextArea 
                  id="input-bio" 
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleInputChange}
                  type="text" 
                  placeholder="Share your Bio" />
                <FormBtn 
                  id="save-bio"
                  onClick={this.handleBioSubmit}>Save Changes</FormBtn>
              </FormDiv>
            </form> 
          </Col>
          <Col size="md-8">
            <h3 className="my-3">Account Details</h3>
            <form className="card-background">
              <DisplayMessageTiny 
                value={this.state.usernameMessage}
                className={this.state.className}>{this.state.usernameMessage}
              </DisplayMessageTiny>
              <FormDiv>
                <Input 
                  id="input-username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Username" />
                <FormBtn 
                  id="save-username"
                  onClick={this.handleUsernameSubmit}>Save Changes</FormBtn>
              </FormDiv>
              <DisplayMessageTiny 
                value={this.state.emailMessage}
                className={this.state.className}>{this.state.emailMessage}
              </DisplayMessageTiny>
              <FormDiv>
              <Input 
                id="input-email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="E-mail address" />
              <FormBtn
                id="save-email"
                onClick={this.handleEmailSubmit}>Save Changes</FormBtn>
              </FormDiv>
              <DisplayMessageTiny 
                value={this.state.occupationMessage}
                className={this.state.className}>{this.state.occupationMessage}
              </DisplayMessageTiny>
              <FormDiv>
                <Input 
                  id="input-occupation"
                  name="occupation"
                  value={this.state.occupation}
                  onChange={this.handleInputChange}
                  placeholder="Occupation" />
              <FormBtn
                id="save-occupation"
                onClick={this.handleOccupationSubmit}>Save Changes</FormBtn>
              </FormDiv> 
              <DisplayMessageTiny 
                value={this.state.locationMessage}
                className={this.state.className}>{this.state.locationMessage}
              </DisplayMessageTiny>
              <FormDiv>
                <Input 
                  id="input-location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleInputChange}
                  placeholder="Location" />
                <FormBtn
                  id="save-location"
                  onClick={this.handleLocationSubmit}>Save Changes</FormBtn>
              </FormDiv>   
            </form>       
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Editprofile;