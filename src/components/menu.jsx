import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu(props) {
  return (
    <div>
      <h1 className='p2 inline'>App</h1>
      <ul className='ml2 inline'>
        <li className='inline ml2'>
          <NavLink to='/'>Index</NavLink>
        </li>
        <li className='inline ml2'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className='inline ml2'>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li className='inline ml2'>
          <NavLink to='/editor'>Editor</NavLink>
        </li>
        <li className='inline ml2'>
          <NavLink to='/widgets'>Widgets</NavLink>
        </li>
      </ul>
    </div>
  )
}
