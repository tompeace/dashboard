import React from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { noop } from '@helpers'
import { css } from 'styled-components'

const ItemTypes = {
  BOX: 'box',
}

// Provider
export function Provider({ children }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  )
}

// Draggable
export const Draggable = ({ 
  id = null,
  children = [], 
  payload = null,
  onClick = noop
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { payload, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
  })

  const styles = css`
    opacity: ${isDragging ? 0.4 : 1}
  `
  
  const handleClick = () => {
    onClick({ id })
  }

  return (
    <div 
      ref={drag} 
      css={styles}
      onClick={handleClick}>
      {children}
    </div>
  )
}

// Target
export const Target = ({ 
  children, 
  name, 
  onDrop = noop, 
  style = {}, 
  ...props 
}) => {

  const handleDrop = (...args) => {
    onDrop(...args)
  }

  const [{ willDrop, didDrop, dropItem }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: handleDrop,
    collect: monitor => ({
      willDrop: monitor.isOver() && monitor.canDrop(),
      isOver: monitor.isOver({ shallow: true }),
      dropItem: monitor.getItem()
    })
  })
  
  return (
    <div 
      ref={drop} 
      style={{
        ...style
        // border: `2px solid ${willDrop ? 'gray' : 'transparent'}`
      }}>
      {children({ willDrop, didDrop, dropItem })}
    </div>
  )
}