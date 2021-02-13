
import React from 'react'
import FlightNav from './containers/FlightNav/FlightNav'
import CardList from './containers/CardList/CardList'

function App() {
  return (
    <>


      <div className="container">

        <div className="app-container">
          <div className="app-left">
            <FlightNav />
          </div>

          <div className="app-right">
            <CardList />

          </div>
        </div>

      </div>
    </>

  );
}

export default App;
