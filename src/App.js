import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <PlanetCard planetName="Terra" planetImage="Terra" />
      </main>
    );
  }
}

export default App;
