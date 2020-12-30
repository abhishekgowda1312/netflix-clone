import React from 'react';
import './App.css';
import Row from './components/Row'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import requests from './requests'


function App() {
  return (
    <div className="app">
      {/* //TODO: NavBar */}
      <NavBar />
      {/* //TODO: Banner */}
      <Banner />
      {/* //? Netflix originals */}
      <Row title="NETFLIX originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      {/* //? Trending Now  */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      {/* //? Top Rated */}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* //? Action Movies */}
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* //? Comedy movies */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      {/* //?Horror movies */}
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* //?Romance Movies */}
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* //?Documentaries */}
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
