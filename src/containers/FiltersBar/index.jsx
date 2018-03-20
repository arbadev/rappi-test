import React, { Component, PropTypes } from 'react'
import { Grid, Label, Form, Checkbox, Radio, Input } from 'semantic-ui-react'

import styles from './filtersBar.css'


const propTypes = {
  onFiltersChange: PropTypes.func,
}

const getSortByUpdate = (id, sortBy) => {
  console.log(Object.keys(sortBy))
  Object.keys(sortBy).map(key => key === id ? sortBy[key] = true : sortBy[key] = false)
  // console.log('sortBy', sortBy)
  return { sortBy }
}

class FiltersBar extends Component {
  constructor() {
    super()

    this.state = {
      searchName: '',
      searchQuantity: '0',
      onlyAvailables: false,
      sortBy: {
        price: false,
        quantity: false,
        // available: false,
      },
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e, { id, value, checked }) {
    let stateUpdate = {}
    if ((id === 'price') || (id === 'quantity') || (id === 'available')) {
      const { sortBy } = this.state
      stateUpdate = getSortByUpdate(id, sortBy)
    } else {
      stateUpdate = {
        [id]: value || checked,
      }
    }
    this.setState(
      stateUpdate,
      () => {
        return this.props.onFiltersChange(this.state)
      },
    )
  }

  render() {
    const {
      searchName, searchQuantity, onlyAvailables, sortBy,
    } = this.state
    return (
      <Grid
        centered
        className={styles.grid}
        padded="vertically"
      >
        <Form>
          <Form.Group
            widths="equal"
            unstackable
          >
            <Form.Field>
              <Label pointing="below">Buscador por nombre</Label>
              <Input
                icon="search"
                id="searchName"
                placeholder="Nombre del producto"
                value={searchName}
                onChange={this.onSearchChange}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group
            widths="equal"
            unstackable
          >
            <Form.Field>
              <Label pointing="below">Cantidad</Label>
              <Input
                type="number"
                icon="search"
                id="searchQuantity"
                min={0}
                placeholder="Cantidad"
                value={searchQuantity}
                onChange={this.onSearchChange}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group
            widths="equal"
            unstackable
            inline
          >
            <Label size="large">Filtros</Label>
            <Form.Field
              control={Checkbox}
              id="onlyAvailables"
              checked={onlyAvailables}
              label="Solo disponibles"
              onChange={this.onSearchChange}
            />
          </Form.Group>

          <Form.Group
            inline
            unstackable
            widths="equal"
          >
            <Label size="large">Ordenar</Label>
            <Form.Field control={Radio} checked={sortBy.price} label="Precio" id="price" onChange={this.onSearchChange} />
            <Form.Field control={Radio} checked={sortBy.quantity} label="Cantidad" id="quantity" onChange={this.onSearchChange} />
            {/* <Form.Field control={Radio} checked={sortBy.available} label="Disponibilidad" id="available" onChange={this.onSearchChange} /> */}
          </Form.Group>
        </Form>
      </Grid>
    )
  }
}

FiltersBar.propTypes = propTypes

export default FiltersBar
