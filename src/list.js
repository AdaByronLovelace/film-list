import React from 'react'
import './list.css'
import ListItem from './listItem'
import * as firebase from './firebase'

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="title">{this.props.name}</div>
        <div className="items">
          list here
        </div>
      </div>
    )
  }
}

// Props: [name] name of the list 