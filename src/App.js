import React from 'react';
import './App.css';
import Header from './containers/Header/Header';
import Suggested from './containers/Suggested/Suggested'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Suggested/>
        {/*Trending*/}
        {/*Body*/}
      </div>
    </div>
  );
}

export default App;
