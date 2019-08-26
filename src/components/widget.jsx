import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Div = styled.div`
  padding: 10px;
  border: 1px solid black
`

export default function Widget(props) {
  const dispatch = useDispatch()
  
  return (
    <Div>
      
    </Div>
  )
}