import React, { PureComponent, PropTypes } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
// import { Row, Col } from 'react-flexbox-grid'

import styles from './categorySelector.css'

const propTypes = {
  categories: PropTypes.object,
}


const buildRecursiveItem = (item) => {
  if (item.hasOwnProperty('sublevels')) {
    return (
      <Dropdown
        key={item.id}
        text={item.name}
        pointing
        className="link item"
      >
        <Dropdown.Menu>
          <Dropdown.Header
            className={styles.dropdown__header}
          >
            {`${item.name} sub`}
          </Dropdown.Header>
          {item.sublevels.map(nestedItem => buildRecursiveItem(nestedItem))}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  return (
    <Menu.Item
      key={item.id}
      className={styles.dropdown__item}
    >
      {item.name}
    </Menu.Item>
  )
}


class CategorySelector extends PureComponent {
  constructor() {
    super()

    this.state = {
    }
  }

  render() {
    const { categories } = this.props.categories
    // console.log('categories', categories)
    return (
      <div className={styles.categorySelector}>
        <Menu
          size="massive"
          inverted
          fluid
          widths={6}
        >
          <Menu.Item
            content="Categorias"
            color="blue"
            header
            position="left"
          />
          {categories.map(item => buildRecursiveItem(item))}
        </Menu>
      </div>
    )
  }
}

CategorySelector.propTypes = propTypes

export default CategorySelector
