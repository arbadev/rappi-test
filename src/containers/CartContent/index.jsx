import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Statistic, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './cartContent.css'

import CartItem from '../../components/CartItem'

const propTypes = {
  products: PropTypes.object,
}

class CartContent extends Component {
  constructor() {
    super()

    this.state = {
    }

    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout(product) {
    console.log('product here', product)
  }

  render() {
    const { products } = this.props.products
    console.log('products', products)
    return (
      <div>
        <Row center="xs">
          <Statistic
            className={styles.heading}
          >
            <Statistic.Value>{products.length} </Statistic.Value>
            <Statistic.Label>Productos</Statistic.Label>
          </Statistic>
          <Col xs={12}>
            <Card.Group centered>
              <CartItem product={products[0]} addToCart={this.handleCheckout} />
            </Card.Group>
          </Col>
        </Row>
        <Link to="/">
          <Button
            icon="arrow left"
            circular
            floated="right"
            size="massive"
          />
        </Link>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.inventory.products,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
}

CartContent.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(CartContent)
