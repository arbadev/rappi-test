import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'
import 'normalize-css'

import styles from './app.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    return (
      <Grid
        fluid
      >
        <Row className={styles.App}>
          <Col md={12} lg={3}>
            Hello, world!
          </Col>
          <Col md={12} lg={9}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
