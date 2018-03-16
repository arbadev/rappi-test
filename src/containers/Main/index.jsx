import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Divider } from 'semantic-ui-react'

/*
* Styles
*/

import styles from './main.css'


/*
* Containers
*/
import CategorySelector from '../CategorySelector'
import ProductsContent from '../ProductsContent'


/*
 * Components
*/
// import InputMolecule from '../../components/InputMolecule'


/*
 * Actions
*/
// import { setUserName } from '../../actions/user'


const propTypes = {
  // user: PropTypes.object,
  // setUserName: PropTypes.func,
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row
          className={styles.main}
        >
          <Col
            md={12}
            lg={3}
            className={styles.main__categoryGrid}
          >
            <CategorySelector />
          </Col>

          <Col md={12} lg={9}>
            <ProductsContent />
          </Col>

        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
