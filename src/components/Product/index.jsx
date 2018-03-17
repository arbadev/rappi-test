import React, { PropTypes } from 'react'
import { Card, Button, Segment, Input, Label } from 'semantic-ui-react'

import styles from './product.css'

const propTypes = {
  product: PropTypes.object,
}

function Product(props) {
  const { product } = props
  console.log(product)
  return (
    <Card
      color="green"
      className={styles.product}
    >
      <Card.Content>
        {/* <Image floated='right' size='mini' src='/assets/images/avatar/large/steve.jpg' /> */}
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


Product.propTypes = propTypes
export default Product

{/* <Segment
  color="black"
>
  <Input
    action={{
      color: 'black',
      labelPosition: 'left',
      icon: 'cart',
      content: 'Agregar',
    }}
    type="number"
    actionPosition="left"
    placeholder="Cantidad..."
    defaultValue={0}
    max={product.quantity}
    min={0}
    size="large"
  />
</Segment> */}
