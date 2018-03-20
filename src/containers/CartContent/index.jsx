import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Statistic, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './cartContent.css'

import CartItem from '../../components/CartItem'

/*
 * Actions
*/
import { removeProduct } from '../../actions/cart'

const propTypes = {
  items: PropTypes.array,
  removeProduct: PropTypes.func,
}

class CartContent extends Component {
  constructor() {
    super()

    this.state = {
    }

    this.handleCheckout = this.handleCheckout.bind(this)
    this.renderProducts = this.renderProducts.bind(this)
  }

  handleCheckout(order) {
    this.props.removeProduct(order)
  }

  renderProducts(items) {
    if (items.length > 0) {
      return items.map((item) => {
        return (
          <CartItem
            key={item.product.id}
            item={item}
            proceedCheckout={this.handleCheckout}
          />
        )
      })
    }
    return <Statistic label="No tiene items registrados en su carrito" className={styles.heading} />
  }

  render() {
    const { items } = this.props
    // console.log('cart items', items)
    return (
      <div>
        <Link to="/">
          <Button
            icon="arrow left"
            circular
            floated="right"
            size="massive"
          />
        </Link>

        <Row center="xs">
          <Statistic
            className={styles.heading}
          >
            <Statistic.Value>{items.length} </Statistic.Value>
            <Statistic.Label>Productos</Statistic.Label>
          </Statistic>
          <Col xs={12}>
            <Card.Group centered>
              {this.renderProducts(items)}
            </Card.Group>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeProduct,
  }, dispatch)
}

CartContent.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(CartContent)
