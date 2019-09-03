import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const Div = styled.div`
  padding: 10px;
  margin: 5px;
  border: 1px solid black;
  width: 200px;
  height: 75px;
  float: left;
`

export default function Widget({ 
  id, 
  name, 
  input = [], 
  output = [] 
}) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (output.length) {
      dispatch({ type: 'CONNECT_WIDGET', id, input, ouput })
    }
  }, [])
  
  return (
    <Div>
      <div>id: {id}</div>
      <div>name: {name}</div>
    </Div>
  )
}