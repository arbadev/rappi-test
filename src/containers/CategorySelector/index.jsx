import React, { PureComponent, PropTypes } from 'react'
import { Dropdown, Menu, Sidebar } from 'semantic-ui-react'
// import { Row, Col } from 'react-flexbox-grid'

import styles from './categorySelector.css'

const propTypes = {
  categories: PropTypes.array,
  onSetCategory: PropTypes.func,
  visible: PropTypes.bool,
}

class CategorySelector extends PureComponent {
  constructor() {
    super()

    this.state = {
    }
    this.buildRecursiveItem = this.buildRecursiveItem.bind(this)
  }

  buildRecursiveItem(item) {
    if (item.hasOwnProperty('sublevels')) {
      return (
        <Dropdown
          key={item.id}
          text={item.name}
          pointing
          // className="link item"
          item
          onClick={() => console.log('clicked item', item)}
        >
          <Dropdown.Menu>
            <Dropdown.Header>
              {`${item.name} sub`}
            </Dropdown.Header>
            {item.sublevels.map(nestedItem => this.buildRecursiveItem(nestedItem))}
          </Dropdown.Menu>
        </Dropdown>
      )
    }
    return (
      <Menu.Item
        key={item.id}
        // className={styles.dropdown__item}
        onClick={() => this.props.onSetCategory(item)}
      >
        {item.name}
      </Menu.Item>
    )
  }

  render() {
    const { categories, visible } = this.props
    console.log('styles', styles)
    return (
      <div className={styles.categorySelector}>
        <Sidebar
          id={styles.sb}
          as={Menu}
          animation="overlay"
          width="thin"
          visible={visible}
          vertical
          inverted
          className={styles.sidebar}
        >
          <Menu.Item
            content="Categorias"
            header
            position="left"
          />
          {categories.map(item => this.buildRecursiveItem(item))}
        </Sidebar>
      </div>
    )
  }
}

CategorySelector.propTypes = propTypes

export default CategorySelector
