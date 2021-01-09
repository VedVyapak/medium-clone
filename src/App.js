import React from 'react';
import './App.css';
import Feed from './containers/Feed/Feed';
import Header from './containers/Header/Header';
import Suggested from './containers/Suggested/Suggested'
import Trending from './containers/Trending/Trending';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__body">
        <Suggested/>
        <Trending/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;
