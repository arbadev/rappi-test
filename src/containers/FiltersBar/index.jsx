import React, { Component } from 'react'
import { Segment, Grid, Search, Header, Label, Form, Checkbox, Radio} from 'semantic-ui-react'

import styles from './filtersBar.css'

class FiltersBar extends Component {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    const value = '1'
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
              <Search
                category
                placeholder="Nombre del producto"
                // loading={isLoading}
                // onResultSelect={this.handleResultSelect}
                // onSearchChange={this.handleSearchChange}
                // results={results}
                // value={value}
                // {...this.props}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group
            widths="equal"
            unstackable
          >
            <Form.Field>
              <Label pointing="below">Filtros</Label>
              <Search
                category
                placeholder="Cantidad"
                // loading={isLoading}
                // onResultSelect={this.handleResultSelect}
                // onSearchChange={this.handleSearchChange}
                // results={results}
                // value={value}
                // {...this.props}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group
            widths="equal"
            unstackable
          >
            <Form.Field control={Checkbox} label="Solo disponibles" />
          </Form.Group>

          <Form.Group
            inline
            unstackable
          >
            <label>Orden por</label>
            <Form.Field control={Radio} label="Precio" value="1" checked={value === '1'} onChange={this.handleChange} />
            <Form.Field control={Radio} label="Cantidad" value="2" checked={value === '2'} onChange={this.handleChange} />
            <Form.Field control={Radio} label="Disponible" value="3" checked={value === '3'} onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </Grid>
    )
  }
}

export default FiltersBar
