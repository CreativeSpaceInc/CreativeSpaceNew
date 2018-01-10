import React, { Component } from "react";
import Signup from './SignUp';
import NewArtistNav from './NewArtistNav';
import API from "../../utils/API";


class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayname: '',
      username: '',
      password: '',
      id: '',
      loggedIn: false,
      session: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.registerArtist = this.registerArtist.bind(this);
    this.getArtistId = this.getArtistId.bind(this);
    this.checkId = this.checkId.bind(this);
    this.artistLoggedIn = this.artistLoggedIn.bind(this);
    this.artistNotLoggedIn = this.artistNotLoggedIn.bind(this);
  };

  validateForm = () => {
    if (!this.state.displayname || !this.state.username || !this.state.password) {
      return null;
    } else {console.log( `all is well`);
    return;}
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  registerArtist = () => {
    console.log(`the registerArtist1 function was called and the state id is ${this.state.id}`);
    API.saveArtist({
      username: this.state.username,
      displayname: this.state.displayname,
      password: this.state.password
      }).then(res => this.getArtistId(this.state.username))
        .catch(err => console.log(err));
      }

  getArtistId = () => {
    var obj = this;
    console.log(`the getArtistId2 function was called and the state id is ${this.state.id}`);
    console.log(this.state.username);
    API.getArtistId(this.state.username)
    .then(res => this.setState({ id: res.data._id }))
    .catch(err => console.log(err))
    .then(setTimeout(function(){
      // console.log(`The state.id is ${this.state.id}`);
      obj.checkId();
    }, 500));
    // .then(res => console.log(`The id is ${res.data._id}`))
  }

  checkId = () => {
    var obj = this;
    console.log(`the checkId3 function was called and the state id is ${this.state.id}`);
    API.checkSessionId()
      .then(res => this.setState({ session: res.data }))
      .catch(err => console.log(err)).then(setTimeout(function(){
        // console.log(`The state.id is ${this.state.id}`);
        obj.renderComponent();
      }, 500));
    // compare it with session
    // update logged on state here? not sure
    // after this is updated, will the page rerender?  Probably not.  Will probably have to run one of those lifecycle methods such as component will update
  }

  renderComponent = () => {
    console.log(`You've made it to the renderComponent function!!! :) and the state session data looks like this: ${JSON.stringify(this.state.session)}`);
    var isThere = (JSON.stringify(this.state.session)).indexOf(this.state.id);
    console.log(`the value of isThere is ${isThere}`);
    if(-1 !== isThere){
      this.artistLoggedIn();
    } else{
      this.artistNotLoggedIn();
    }
  }

  artistLoggedIn = () => {
    console.log('the artist is logged in');
    this.setState({ loggedIn: true });
  };

  artistNotLoggedIn = () => {
    console.log('the artist is NOT loggd in')
  };

    // componentDidMount() {
    //   console.log(`The username in componentDidMount is ${this.state.username}`);
    // }

  render() {
    return (
      <div>
        <p>Status is {this.state.displayname}</p>
        <p>Status is {this.state.username}</p>
        <p>Status is {this.state.password}</p>
        {!this.state.loggedIn ? (
          <Signup displayname = {this.state.displayname} username = {this.state.username} password = {this.state.password} handleInputChange = {this.handleInputChange}
          registerArtist = {this.registerArtist}
          getArtistId = {this.getArtistId}
          checkId = {this.checkId}
          validateForm = {this.validateForm}/>
          ) : (
            <NewArtistNav />
          )
        }
      </div>
    );
  }
}

export default SignUpContainer;
