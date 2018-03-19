import React, { Component, PropTypes } from 'react'
import { Grid, Label, Form, Checkbox, Radio, Input } from 'semantic-ui-react'

import styles from './filtersBar.css'


const propTypes = {
  onFiltersChange: PropTypes.func,
}

class FiltersBar extends Component {
  constructor() {
    super()

    this.state = {
      searchName: '',
      searchQuantity: '',
      onlyAvailables: false,
      price: false,
      quantity: false,
      available: false,
    }

    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e, { id, value, checked }) {
    this.setState(
      {
        [id]: value || checked,
      },
      () => {
        return this.props.onFiltersChange(this.state)
      },
    )
  }

  render() {
    const {
      searchName, searchQuantity, onlyAvailables, price, quantity, available,
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
              <Label pointing="below">Filtros</Label>
              <Input
                icon="search"
                id="searchQuantity"
                placeholder="Cantidad"
                value={searchQuantity}
                onChange={this.onSearchChange}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group
            widths="equal"
            unstackable
          >
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
          >
            <label>Orden por</label>
            <Form.Field control={Radio} checked={price} label="Precio" id="price" onChange={this.onSearchChange} />
            <Form.Field control={Radio} checked={quantity} label="Cantidad" id="quantity" onChange={this.onSearchChange} />
            <Form.Field control={Radio} checked={available} label="Disponibilidad" id="available" onChange={this.onSearchChange} />
          </Form.Group>
        </Form>
      </Grid>
    )
  }
}

FiltersBar.propTypes = propTypes

export default FiltersBar
