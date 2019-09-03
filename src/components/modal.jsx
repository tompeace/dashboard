import React from 'react'
import { createPortal } from 'react-dom'
import { css } from 'styled-components'

const container = document.getElementById('portal')
const modalStyles = css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
`

function Modal(props) {
    return createPortal((
        <div css={modalStyles} >
            Modal
        </div>
    ), container)
}


export default Modal