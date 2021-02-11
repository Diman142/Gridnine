
import React from 'react'
import FlightNav from './containers/FlightNav/FlightNav'
import CardList from './containers/CardList/CardList'

function App() {
  return (
    <>
      <FlightNav />

      <div className="container">

        <div className="app-container">

          <div className="app-right">
            <CardList />

          </div>
        </div>

      </div>
    </>

  );
}

export default App;
