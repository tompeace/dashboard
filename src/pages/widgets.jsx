import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
      <button 
        onClick={incrementCount}>
        increase
      </button>
      <br />
      <button 
        onClick={fetchPosts}>
        fetch posts
      </button>
      <br />
      <button 
        onClick={ping}>
        ping
      </button>
      <br />
      <button 
        onClick={cancelPolling}>
        cancel polling
      </button>
      <Widgets />
      <Modal>
        <h1>
          Modal yolo!
        </h1>
      </Modal>
      <button 
        onClick={openModal}>
        cancel polling
      </button>
    </div>
  )
}