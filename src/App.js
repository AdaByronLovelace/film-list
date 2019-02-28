import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
// import Row from '@material-ui/core/Row'
import './app.css'
import List from './list'
import Search from './search'


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container>
          {/* header of app */}
          <div className="main-header">Smith Film List</div>
          {/* The main list of films */}
          <List name="horror"/>
          {/* Add a film/show to list */}
          <h2>Add a film or tv show</h2>
          <Search />
        </Grid>
      </React.Fragment>
    )
  }
}
