import React from 'react';
import './list.css'
import * as films from './filmData'

export default class ListItem extends React.Component {
  render() {
    const film = films.data.films.filter(item => item.id === this.props.id)[0]
    return (
      <div className="list-item">
        {film.title}
      </div>
    );
  }
}