import React, { PureComponent, PropTypes } from 'react'
import { Card, Input } from 'semantic-ui-react'

import styles from './cartItem.css'

const propTypes = {
  item: PropTypes.object,
  proceedCheckout: PropTypes.func,
}

class CartItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.item.quantity,

    }
    this.onCheckout = this.onCheckout.bind(this)
    this.onQuantityChange = this.onQuantityChange.bind(this)
  }

  onQuantityChange(e, { value }) {
    e.preventDefault()
    const { quantity } = this.props.item.product
    value = value > quantity ? quantity : value
    this.setState({ quantity: parseInt(value) })
  }

  onCheckout() {
    const { item, proceedCheckout } = this.props
    const { quantity } = this.state
    item.quantity = quantity
    return proceedCheckout(item)
  }

  render() {
    const { item } = this.props
    const { quantity } = this.state
    return (
      <Card
        color="green"
        className={styles.cartItem}
      >
        <Card.Content>
          <Card.Header>
            {item.product.name}
          </Card.Header>
          <Card.Meta>
            {item.product.price}
          </Card.Meta>
          <Card.Description>
            <strong>Disponibles</strong> {item.product.quantity}
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
              disabled: quantity <= 0,
            }}
            type="number"
            actionPosition="left"
            placeholder="Cantidad..."
            value={quantity}
            max={item.product.quantity}
            min={0}
            size="medium"
            onChange={this.onQuantityChange}
            className={styles.btn}
          />
        </Card.Content>
      </Card>
    )
  }
}


CartItem.propTypes = propTypes
export default CartItem
