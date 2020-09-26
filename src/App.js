import React from 'react';
import Row from './Row'
import requests from './request'
import Banner from './Banner'
import Navbar from './Navbar'


import './App.css';

function App() {
  return (
    
    <div className='app'>
      <Navbar />
      <Banner />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance" fetchUrl={requests.fetchTopRated} />
      <Row title="Horror" fetchUrl={requests.fetchTrending} />
      <Row title="Documentaries" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy" fetchUrl={requests.fetchTrending} />
      <Row title="Action" fetchUrl={requests.fetchTopRated}/>

     
    </div>
  );
}

export default App;


//api key: 3cdba3a392000ba80cd5eaceb130e6da
