import React from 'react'
import './App.css'
import List from './list'
import Search from './search'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          The Film List
        </header>
        <Search />
        <div className="lists">
          <List name="horror"/>
        </div>
      </div>
    );
  }
}
