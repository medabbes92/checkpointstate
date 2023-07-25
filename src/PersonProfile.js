import React, { Component } from 'react';

class PersonProfile extends Component {
  state = {
    timeSinceMount: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.props.person;
    const { timeSinceMount } = this.state;
    const imageStyles = {
        width: '600px' } ;

    return (
      <div>
        <div>
          <img  src={imgSrc} alt={fullName} style={imageStyles}/>
        </div>
        <div>
          <h2>{fullName}</h2>
          <p>{bio}</p>
          <h5> {profession}</h5>
        </div>
        <p> {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default PersonProfile;
