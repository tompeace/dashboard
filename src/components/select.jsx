import React from 'react'
import ReactSelect, { components } from 'react-select'

const styles = {
  indicatorSeparator: () => false,
  menuList: (p, s) => ({...p, marginTop: '-4px' }),
  menu: (p, s) => ({...p, marginTop: '-1px' })
}

const items = {
  DropdownIndicator: (props) => {
    return (
      <components.DropdownIndicator {...props}>
        yolo
      </components.DropdownIndicator>
    )
  },

}


export default function Select(props) {
  return (
    <ReactSelect 
      components={items}
      styles={styles} 
      {...props} 
    />
  )
}