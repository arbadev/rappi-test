import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button, Sidebar, Segment, Menu } from 'semantic-ui-react'
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

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
    }
    this.handleSetCategory = this.handleSetCategory.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  componentDidMount() {
    // console.log('app width', this.category.offsetWidth)
  }

  handleSetCategory(category) {
    console.log('asdasdasdas category', category)
    this.props.setCategory(category)
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { categories, products } = this.props
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
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
                    <FiltersBar />
                  </Col>

                  <Col
                    md={12}
                    lg={9}
                    className={styles.main__productsGrid}
                  >
                    <ProductsContent products={products} />
                  </Col>
                </Row>
                <Link to="/cart">
                  <Button
                    icon="shop"
                    circular
                    floated="right"
                    size="massive"
                  />
                </Link>
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
