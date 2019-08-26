import React from 'react'
import styled from 'styled-components'
import ReactSelect from 'react-select'

const StyledSelect = styled(ReactSelect)`
  // TODO
`

export default function Select({ options }) {
  return <StyledSelect options={options} />
}