import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { css } from 'styled-components'

const container = document.getElementById('portal')

const portalStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
const modalStyles = css`
  max-width: 900px;
  max-height: 500px;
  height: 100%;
  margin: auto;
  background-color: white;
  padding: 20px;
`

export default function Modal({ children }) {
  const dispatch = useDispatch()
  const modals = useSelector(s => s.ui.modals)
  
  useEffect(() => {
    window.onkeydown = handleEsc
    return () => window.onkeydown = null
  }, [])
  
  function handleEsc({ keyCode }) {
    if (keyCode === 27) {
      dispatch({ type: 'MODAL_CLOSE' })
    }
  }
  
  return modals && createPortal((
    <div css={portalStyles}>
      <div css={modalStyles}>
        {children}
      </div>
    </div>
  ), container)
}