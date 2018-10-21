import React from 'react'
import * as api from './omdb'

export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      result: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.findFilm = this.findFilm.bind(this)
  }

  findFilm(query) {
    const param = `t=${query}`
    fetch(`${api.url}${param}`)
    .then(results => {
      return results.json()
      }).then(data => {
        this.setState({
          result: data
        })
        console.log(data)
      })
  }

  handleClick() {
    this.findFilm(this.state.query)
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Find Film</button>
        <div>{JSON.stringify(this.state.result)}</div>
      </div>
    );
  }
}