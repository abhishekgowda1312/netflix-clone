import React from 'react';
import './App.css';
import Row from './components/Row'
import requests from './requests'


function App() {
  return (
    <div className="App">
      {/* //? Netflix originals */}
      <Row title="NETFLIX originals" fetchUrl={requests.fetchNetflixOriginals} />
      {/* //? Trending Now  */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* //? Top Rated */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* //? Action Movies */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* //? Comedy movies */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

    </div>
  );
}

export default App;
