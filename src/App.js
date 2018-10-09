import React from 'react'
import './App.css'
import List from './list'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          The Film List
        </header>
        <div className="lists">
          <List name="horror"/>
        </div>
      </div>
    );
  }
}
