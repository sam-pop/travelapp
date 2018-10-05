import React, { Component } from 'react';
import './App.css';
import {db} from './db.js'
import Map from './components/Map';
import {LocationSearchInput} from './components/LocationSearchInput';


db.collection('trips').find({}, { limit: 100}).asArray().then(docs => {
      console.log("Found docs", docs)});


class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationSearchInput />
        <Map />
      </div>
    );
  }
}

export default App;
