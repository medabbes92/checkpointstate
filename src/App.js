import React, { Component } from 'react';
import PersonProfile from './PersonProfile';

class App extends Component {
  state = {
    person: {
      fullName: 'Mesut Ozil',
      bio: "Mesut Ozil is a renowned German footballer who shot to fame when he was selected as one of the nominees for the ‘Golden Ball Award’ in FIFA World Cup 2010. Mesut also earned acclaim and commendation from all quarters for playing a key role in the final fixture of the 2014 FIFA World Cup in which Germany became the world champions after trouncing Argentina. Ozil, who has been part of the German national squad since 2009 presently plays for Arsenal, an English football club. His professional career began to take root when he was picked up as one of team members to represent-‘Schalke’—his native club—in the 2006 edition of Bundesliga, the German national league. After his scintillating performance in the FIFA World Cup 2010 held in South Africa, he was roped in by the celebrated Spanish soccer club Real Madrid to represent the side in club championships. However, in 2013, he was transferred to Arsenal for a whopping fee of £42.5 million. Mesut who plays as a midfielder is noted for his aggressive playing style, and numerous footballers and coaches has seen in him shades of Zinedine Zidane, the legendary French footballer.",
      imgSrc: 'https://www.realmadrid.com/img/cc_1920px/ozil_0am1299_20230322073514.jpg',
      profession: 'Football Player',
    },
    show: false,
  };

  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { show } = this.state;
    const appStyles = {
      
      padding: '50px',
    };

    return (
      <div style={appStyles}>
        <h1>The best playermaker in the world </h1>
        <button onClick={this.handleToggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && <PersonProfile person={this.state.person} />}
      </div>
    );
  }
}

export default App;

