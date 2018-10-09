import React from 'react'
import './list.css'
import ListItem from './listItem'
import * as films from './filmData'

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="title">{this.props.name}</div>
        <div className="items">
          {
            films.data.lists[this.props.name].map((film, index) => {
              return (<ListItem key={index} id={film}/>)
            })
          }
        </div>
      </div>
    )
  }
}

// Props: [name] name of the list 