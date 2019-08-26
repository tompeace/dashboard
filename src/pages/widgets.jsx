import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@bigfinite/component-library'
import { Container, Section, Bar } from 'react-simple-resizer';
import nanoid from 'nanoid'

// import { fetchPosts } from '@store/epics/widgets'
import { pingEpic } from '@store/epics'

export default function Widgets(props) {
  const dispatch = useDispatch()
  const counter = useSelector(s => s.counter)

  const incrementCount = () => dispatch({ type: 'INCREMENT' })
  const fetchPosts = () => dispatch({ type: 'FETCH', payload: { id: nanoid() }})
  const cancelPolling = () => dispatch({ type: 'CANCEL_POLLING' })
  const ping = () => dispatch({ type: 'PING' })

  return (
    <div>
      <h3>Widgets</h3>
      <p>{counter}</p>
      <Button 
        onClick={incrementCount}>
        increase
      </Button>
      <br />
      <Button 
        onClick={fetchPosts}>
        fetch posts
      </Button>
      <br />
      <Button 
        onClick={ping}>
        ping
      </Button>
      <br />
      <Button 
        onClick={cancelPolling}>
        cancel polling
      </Button>
      <br />
      <Container vertical style={{
        height: "50vh",
        userSelect: "none",
        fontSize: "16px",
        fontFamily: "sans-serif",
        textAlign: "center",
        whiteSpace: "nowrap"
      }}>
        <Section style={{ background: "#d3d3d3" }} />
        <Bar style={{
          background: "#888888",
          cursor: "col-resize"
        }} />
        <Section style={{ background: "#d3d3d3" }} />
      </Container>
    </div>
  )
}