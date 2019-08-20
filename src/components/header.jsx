import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const activeStyle = { fontWeight: 'bold' }


const StyledDiv = styled.div`
  margin: 14px 10px;

  h1 {
    display: inline;
  }

  ul {
    display: inline;
  }

  li {
    display: inline;
    margin-right: 14px;
  }
`

export default function Header(props) {
  return (
    <StyledDiv>
      <h1>App</h1>
      <ul>
        <li><NavLink to='/' activeStyle={activeStyle}>Index</NavLink></li>
        <li><NavLink to='/about' activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to='/users' activeStyle={activeStyle}>Users</NavLink></li>
        <li><NavLink to='/editor' activeStyle={activeStyle}>Editor</NavLink></li>
        <li><NavLink to='/widgets' activeStyle={activeStyle}>Widgets</NavLink></li>
      </ul>
    </StyledDiv>
  )
}
