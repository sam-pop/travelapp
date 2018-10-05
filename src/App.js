import React, { Component } from 'react'
import './App.css'
import db from './db.js'
import MapContainer from './containers/MapContainer'

console.log('db', db)

db.getClient().then(db =>
  db.collection('trips').find({}, { limit: 100 }).asArray().then(docs => {
    console.log('Found docs', docs)
  }))

class App extends Component {
  render () {
    return (
      <div className="App">
        <MapContainer />
      </div>
    )
  }
}

export default App
