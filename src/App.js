import React, { Component } from 'react'
import './App.css'
import db from './db.js'
import BarContainer from './containers/BarContainer'

import '@material/fab/dist/mdc.fab.css';

import MapContainer from './containers/MapContainer'
import { Fab } from '@rmwc/fab';

const fabStyle = {
  position: 'absolute',
  bottom: '5em',
  right: '5em',
}


// db.getClient().then(db =>
//   db.collection('trips').find({}, { limit: 100 }).asArray().then(docs => {
//     console.log('Found docs', docs)
//   }))

class App extends Component {
  render () {
    return (
      <div className="App">
        <BarContainer />
        <MapContainer />
        <Fab icon="+" className='fab' style={fabStyle} onClick={() => alert('click')}/>
      </div>
    )
  }
}

export default App
