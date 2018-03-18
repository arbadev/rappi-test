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
    this.state = {}
    this.onAddProduct = this.onAddProduct.bind(this)
  }

  onAddProduct() {
    const { product, addToCart } = this.props
    return addToCart(product)
  }

  render() {
    const { product } = this.props
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
            defaultValue={0}
            max={product.quantity}
            min={0}
            size="medium"
          />
        </Card.Content>
      </Card>
    )
  }
}


Product.propTypes = propTypes
export default Product
