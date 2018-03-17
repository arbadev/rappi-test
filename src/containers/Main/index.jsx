import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'

/*
* Styles
*/

import styles from './main.css'


/*
* Containers
*/
import CategorySelector from '../CategorySelector'
import ProductsContent from '../ProductsContent'
import FiltersBar from '../FiltersBar'


/*
 * Components
*/
// import InputMolecule from '../../components/InputMolecule'


/*
 * Actions
*/
// import { setUserName } from '../../actions/user'


const propTypes = {
  categories: PropTypes.object,
  products: PropTypes.object,
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { categories, products } = this.props
    return (
      <Grid
        fluid
        className={styles.main}
      >
        <Row
          center="xs"
        >
          <Col
            xs={12}
          >
            <CategorySelector
              categories={categories}
            />
          </Col>
        </Row>

        <Row
          center="xs"
          between="xs"
          className={styles.main__content}
        >
          <Col
            md={12}
            lg={3}
            className={styles.main__filterGrid}
          >
            <FiltersBar />
          </Col>

          <Col
            md={12}
            lg={9}
            className={styles.main__productsGrid}
          >
            <ProductsContent products={products} />
          </Col>
        </Row>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    products: state.products.products,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
