import React from 'react'
import './list.css'

export default class ListItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="">
          <div className="image"></div>
          <div className="title">{this.props.data.Title}</div>
        </div>
      </div>
    );
  }
}

// Props: 
// data: object from API