import React, {
  useState,
  useRef,
  createRef,
  useLayoutEffect,
  useMemo
} from 'react'
import styled from 'styled-components'
import { noop } from '@helpers'


const Resizable = styled.div.attrs(({ height }) => ({
  style: {
    height
  }
}))`
  border: 1px solid gray;
  border-radius: 4px;
  overflow: scroll;
`

function Slider({ 
  handleMouseMove: _handleMouseMove = noop 
}) {
  function handleMouseDown(e) {
    e.preventDefault()
    document.onmouseup = handleMouseUp
    document.onmousemove = handleMouseMove.bind(null, e.pageY)
  }
  
  function handleMouseUp (e) {
    e.stopPropagation()
    document.onmouseup = null
    document.onmousemove = null
  }
  
  function handleMouseMove(initial, e) {
    const distanceMoved = -(initial - e.pageY)
    _handleMouseMove(distanceMoved)
  }
  
  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        padding: '4px',
        margin: '4px',
        width: '100%',
        cursor: 'ns-resize'
      }}>
      <div
        style={{
          height: '4px',
          width: '20px',
          borderRadius: '4px',
          margin: '0 auto',
          backgroundColor: 'gray',
        }} />
    </div>
  )
}

export default function Resizer({ 
  children, 
  height = '100%' 
}) {
  const containerRef = useRef(null)
  const refs = useRef(children.map(createRef))
  const [sizes, setSizes] = useState([])
  
  const getHeight = (i) => {
    const total = containerRef.current && containerRef.current.scrollHeight
    console.log('total:', total);
    const percentage = sizes[i] / total * 100
    return total && `${percentage}%`
  }

  const getInitial = (i) => refs.current[i].current.scrollHeight

  useLayoutEffect(() => {
    if (!sizes.length) {
      setSizes(refs.current.map(ref => ref.current.scrollHeight))
    }
    // set sizes of elements based on percentage
  }, [sizes])
  
  
  function handleMouseMove(i, val) {
    const initial = getInitial(i);
    console.log(initial);
    setSizes(prev => {
      const next = [...prev]
      next[i] = initial + val
      return next
    })
  }

  return (
    <div
      ref={containerRef}
      style={{ 
        position: 'relative',
        height
      }}>
      {children.map((child, i) => {
        const index = i + 1
        const mouseMove = handleMouseMove.bind(null, i)
        const height = getHeight(i)

        return index !== children.length ? (
          <div
            key={i}
            ref={refs.current[i]}>
            <Resizable height={height}>
              {child}
            </Resizable>
            <Slider 
              handleMouseMove={mouseMove} />
          </div>
        ) : (
          <Resizable
            key={i} 
            ref={refs.current[i]}>
            {child}
          </Resizable>
        )
      })}
    </div>
  )
}