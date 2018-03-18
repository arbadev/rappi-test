import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Statistic } from 'semantic-ui-react'

import styles from './productsContent.css'

import Product from '../../components/Product'

const propTypes = {
  products: PropTypes.array,
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
    console.log('product', product)
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
    return <Statistic label="Intente nueva busqueda" className={styles.heading} />
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
          <Col xs={12}>
            <Card.Group centered>
              {this.renderProducts(products)}
            </Card.Group>
          </Col>
        </Row>

      </div>
    )
  }
}

ProductsContent.propTypes = propTypes

export default ProductsContent
