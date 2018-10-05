import React, { Component } from 'react'
import './App.css'
import db from './db.js'
import Map from './components/Map'
import BarContainer from './containers/BarContainer'

db.getClient().then(db =>
  db.collection('trips').find({}, { limit: 100 }).asArray().then(docs => {
    console.log('Found docs', docs)
  }))

class App extends Component {
  render () {
    return (
      <div className="App">
        <BarContainer />
        <Map />
      </div>
    )
  }
}

export default App
