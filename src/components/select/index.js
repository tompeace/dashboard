import React from 'react'
import ReactSelect from 'react-select'
import * as selectComponents from './components'

const theme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: blue,
    neutral20: gray
  },
  spacing: {
    ...theme.spacing,
    baseUnit: 2,
    controlHeight: 34
  }
})

const styles = {
  indicatorsContainer: p => p,
  input: p => ({ ...p }),
  container: p => ({ ...p, border: 'none' }),
  valueContainer: p => ({ ...p }),
  control: (p, s) => ({
    ...p,
    boxShadow: 'none',
    border: `1px solid ${gray}`,
    borderColor: s.isFocused ? blue : gray,
    borderRadius: s.menuIsOpen ? '4px 4px 0 0' : '4px'
  }),
  option: (p, s) => ({
    ...p,
    borderTop: `1px solid ${gray}`,
    borderBottom: `1px solid transparent`,
    borderLeft: `1px solid ${gray}`,
    borderRight: `1px solid ${gray}`,
    ':hover': {
      borderColor: blue
    }
  }),
  menuList: p => ({ 
    ...p,
    padding: 0,
    border: 0
  }),
  menu: p => ({
    ...p,
    marginTop: '0',
    borderRadius: '0 0 4px 4px',
    boxShadow: '0 4px 11px hsla(0, 0%, 0%, 0.1)'
  })
}

export default function Select(props) {
  return (
    <ReactSelect
      styles={styles}
      components={selectComponents}
      theme={theme}
      {...props} 
    />
  )
}