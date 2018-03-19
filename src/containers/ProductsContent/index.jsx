import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Statistic } from 'semantic-ui-react'
/*
 * Styles
*/
import styles from './productsContent.css'
/*
 * Components
*/
import Product from '../../components/Product'

/*
 * Actions
*/
import { addProduct } from '../../actions/cart'

const propTypes = {
  products: PropTypes.array,
  addProduct: PropTypes.func,
}

class ProductsContent extends Component {
  constructor() {
    super()

    this.state = {
    }

    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.renderProducts = this.renderProducts.bind(this)
  }

  handleAddToCart(product) {
    this.props.addProduct(product)
  }

  renderProducts(products) {
    if (products.length > 0) {
      return products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={this.handleAddToCart}
          />
        )
      })
    }
    return <Statistic label="Por favor seleccione una categoria" className={styles.heading} />
  }

  render() {
    const { products } = this.props
    // console.log('products', products)
    return (
      <div>
        <Statistic
          className={styles.heading}
          label="Productos"
          value={products.length}
        />
        <Row center="xs">
          <Col xs={10}>
            <Card.Group centered>
              {this.renderProducts(products)}
            </Card.Group>
          </Col>
        </Row>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // categories: state.inventory.categories,
    // products: state.inventory.filteredProduts,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProduct,
  }, dispatch)
}

ProductsContent.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(ProductsContent)
