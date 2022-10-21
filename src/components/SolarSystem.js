import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    const planetas = 'Planetas';
    const planets = Planets;
    return (
      <div data-testid="solar-system">
        <Title headline={ planetas } />
        <div>
          {planets.map(({ name, image }, index) => (
            <PlanetCard key={ index } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
