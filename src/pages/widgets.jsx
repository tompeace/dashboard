import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@bigfinite/component-library'
import Widget from '../components/widget.jsx'
import Modal from '../components/modal.jsx'
import nanoid from 'nanoid'


export default function Widgets(props) {
  const dispatch = useDispatch()
  const counter = useSelector(s => s.counter)
  const widgets = useSelector(s => s.widgets)

  const incrementCount = () => dispatch({ type: 'INCREMENT' })
  const fetchPosts = () => dispatch({ type: 'FETCH', id: nanoid() })
  const cancelPolling = () => dispatch({ type: 'CANCEL_POLLING' })
  const ping = () => dispatch({ type: 'PING' })
  const openModal = () => dispatch({ type: 'MODAL_OPEN' })

  const Widgets = () => widgets
    .map(w => <Widget key={w.name} {...w} />)

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
      <Widgets />
      <Modal>
        <h1>
          Modal yolo!
        </h1>
      </Modal>
      <Button 
        onClick={openModal}>
        cancel polling
      </Button>
    </div>
  )
}