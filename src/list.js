import React from 'react'
import './list.css'
import ListItem from './listItem'
import { firebase } from './firebase'

// check out the following and implement that way : 
// https://medium.com/quick-code/how-to-integrate-react-redux-and-firebase-in-3-simple-steps-c44804a6af38

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items')
    this.setState({
      items: itemsRef
    })
  }
  render() {
    return (
      <div className="list">
        <div className="title">{this.props.name}</div>
        <div className="items">
          {
            //console.log(firebase)
            // firebase.data.map( thing => {
            //   return (
            //     <ListItem>thing.name</ListItem>
            //   )
            // })
          }
        </div>
      </div>
    )
  }
}

// Props: [name] name of the list 