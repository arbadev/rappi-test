import React, { PureComponent, PropTypes } from 'react'
import { Card, Input } from 'semantic-ui-react'

import styles from './cartItem.css'

const propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
}

class CartItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.onCheckout = this.onCheckout.bind(this)
  }

  onCheckout() {
    const { product, addToCart } = this.props
    return addToCart(product)
  }

  render() {
    const { product } = this.props
    return (
      <Card
        color="green"
        className={styles.cartItem}
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
              icon: 'shopping bag',
              content: 'Comprar',
              onClick: this.onCheckout,
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


CartItem.propTypes = propTypes
export default CartItem
