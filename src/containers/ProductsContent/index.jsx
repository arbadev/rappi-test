import React, { Component, PropTypes } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Statistic } from 'semantic-ui-react'

import styles from './productsContent.css'

import Product from '../../components/Product'

const propTypes = {
  products: PropTypes.object,
}

class ProductsContent extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    const { products } = this.props.products
    // console.log('products', products)
    const valueText = `${products.length} coincidencias`
    return (
      <div>
        <Statistic
          className={styles.heading}
        >
          <Statistic.Value>{products.length} </Statistic.Value>
          <Statistic.Label>Productos</Statistic.Label>
        </Statistic>

        <Row center="xs">
          <Col xs={12}>
            <Card.Group centered>
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
              <Product product={products[0]} />
            </Card.Group>
          </Col>
        </Row>

      </div>
    )
  }
}

ProductsContent.propTypes = propTypes

export default ProductsContent
