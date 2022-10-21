import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missionsString = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ missionsString } />
        <div className="Mission-Cards">
          {missions.map(({ name, year, country, destination }, index) => (
            <MissionCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
