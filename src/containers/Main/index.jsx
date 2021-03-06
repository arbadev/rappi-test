import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, Sidebar, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

/*
* Styles
*/

import styles from './main.css'


/*
* Containers
*/
import CategorySelector from '../CategorySelector'
import ProductsContent from '../ProductsContent'
import FiltersBar from '../FiltersBar'


/*
 * Components
*/
// import InputMolecule from '../../components/InputMolecule'


/*
 * Actions
*/
import { setCategory } from '../../actions/inventory'


const propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
  setCategory: PropTypes.func,
}

const sortByProp = (products, prop) => {
  return products.sort((a, b) => {
    if (prop === 'price') {
      return a[prop].replace(/[^\d.]/g, '') - b[prop].replace(/[^\d.]/g, '')
    }
    return a[prop] - b[prop]
  })
}

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      products: this.props.products,
    }
    this.handleSetCategory = this.handleSetCategory.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.handleFiltersState = this.handleFiltersState.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { products } = nextProps
    this.setState({ products })
  }

  handleSetCategory(category) {
    // console.log('category', category)
    this.props.setCategory(category)
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  handleFiltersState(filtersState) {
    const {
      searchName, searchQuantity, onlyAvailables, sortBy,
    } = filtersState
    const { products } = this.props
    let filteredProduts = products.filter((product) => {
      let auxName = true
      let auxQuantity = false
      let auxAvailable = true

      if (searchName && searchName.length > 0) {
        auxName = product.name.includes(searchName)
      }
      auxQuantity = product.quantity >= searchQuantity

      if (onlyAvailables) {
        auxAvailable = product.quantity > 0
      }
      return auxName && auxQuantity && auxAvailable
    })
    if (sortBy.price || sortBy.quantity) {
      const sortProp = sortBy.price ? 'price' : 'quantity'
      filteredProduts = sortByProp(filteredProduts, sortProp)
    }
    this.setState({
      products: filteredProduts,
    })
  }

  render() {
    const { categories } = this.props
    const { visible, products } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility} size="large" color="black">Menu de Categorias</Button>
        <Sidebar.Pushable as={Segment} >
          <CategorySelector
            categories={categories}
            onSetCategory={this.handleSetCategory}
            visible={visible}
          />
          <Sidebar.Pusher>
            <Segment basic>
              <Grid
                fluid
                className={styles.main}
                // ref={(a) => { this.category = a }}
              >
                <Link to="/cart">
                  <Button
                    icon="shop"
                    circular
                    floated="right"
                    size="massive"
                  />
                </Link>
                <Row
                  center="xs"
                  between="xs"
                  className={styles.main__content}
                >
                  <Col
                    md={12}
                    lg={3}
                    className={styles.main__filterGrid}
                  >
                    <FiltersBar onFiltersChange={this.handleFiltersState} />
                  </Col>

                  <Col
                    md={12}
                    lg={9}
                    className={styles.main__productsGrid}
                  >
                    <ProductsContent products={products} />
                  </Col>
                </Row>
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.inventory.categories,
    products: state.inventory.filteredProduts,
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setCategory,
  }, dispatch)
}

Main.propTypes = propTypes

export default connect(mapStateToProps, matchDispatchToProps)(Main)
