import React, { PureComponent, PropTypes } from 'react'
import { Card, Input } from 'semantic-ui-react'

import styles from './product.css'

const propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
}

class Product extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 0,
    }
    this.onAddProduct = this.onAddProduct.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
  }

  onAddProduct() {
    const { product, addToCart } = this.props
    const { quantity } = this.state
    return addToCart({ product, quantity })
  }

  onQuantityChange(e, { value }) {
    e.preventDefault()
    this.setState({ quantity: parseInt(10, value) })
  }

  render() {
    const { product } = this.props
    const { quantity } = this.state
    return (
      <Card
        color={product.quantity > 0 ? 'green' : 'red'}
        className={styles.product}
      >
        <Card.Content>
          <Card.Header>
            {product.name}
          </Card.Header>
          <Card.Meta>
            {product.price}
          </Card.Meta>
          <Card.Description>
            <strong>Disponibles</strong> {product.quantity}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Input
            action={{
              color: 'black',
              labelPosition: 'left',
              icon: 'cart',
              content: 'Agregar',
              onClick: this.onAddProduct,
            }}
            type="number"
            actionPosition="left"
            placeholder="Cantidad..."
            value={quantity}
            max={product.quantity}
            min={0}
            size="medium"
            onChange={this.onQuantityChange}
          />
        </Card.Content>
      </Card>
    )
  }
}


Product.propTypes = propTypes
export default Product
