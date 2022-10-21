import React, { Component } from 'react';
import Title from './Title';

class Missions extends Component {
  render() {
    const missions = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missions } />
      </div>
    );
  }
}

export default Missions;
