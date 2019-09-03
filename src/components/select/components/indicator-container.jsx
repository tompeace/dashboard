import React from 'react'
import { components } from 'react-select'

export default function IndicatorContainer(props) {
  return (
    <components.IndicatorsContainer {...props}>
      {props.selectProps.menuIsOpen ? '🔻' : '🔺'}
    </components.IndicatorsContainer>
  )
}