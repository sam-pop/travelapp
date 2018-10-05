import React, { Component } from 'react';
import './App.css';
import '@material/fab/dist/mdc.fab.css';

import Map from './components/Map';
import { Fab } from '@rmwc/fab';

const fabStyle = {
  position: 'absolute',
  bottom: '5em',
  right: '5em',
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Map />
      <Fab icon="+" className='fab' style={fabStyle} onClick={() => alert('click')}/>
      </div>
    );
  }
}

export default App;
