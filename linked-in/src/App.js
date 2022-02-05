import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* App Body */ }
      <div className='app__body'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        {/* <Widgets></Widgets> */ }
      </div>
      {/* left sidebar */ }
      {/* feed */ }
      {/* right sidebar */ }

    </div>
  );
}

export default App;
