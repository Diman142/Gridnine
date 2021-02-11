
import React from 'react'
import FlightNav from './containers/FlightNav/FlightNav'
import CardList from './containers/CardList/CardList'

function App() {
  return (
    <React.Fragment>
      <FlightNav></FlightNav>

      <div className="container">

        <div className="app-container">

          <div className="app-right">
            <CardList></CardList>

          </div>
        </div>

      </div>
    </React.Fragment>

  );
}

export default App;
