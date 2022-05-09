import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard />
      </main>
    );
  }
}

export default App;
