import React from 'react'
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { noop } from '@helpers'

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
export const Draggable = ({ children, payload }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { payload, type: ItemTypes.BOX },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={drag} style={{ opacity }}>
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
    // console.log(args);
    onDrop(...args);
  }

  const [{ willDrop, didDrop, dropItem }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: handleDrop,
    collect: monitor => ({
      willDrop: monitor.isOver() && monitor.canDrop(),
      isOver: monitor.isOver({ shallow: true }),
      dropItem: monitor.getItem(),
    })
  })
  
  return (
    <div 
      ref={drop} 
      style={{
        ...style,
        border: `2px solid ${willDrop ? 'gray' : 'transparent'}` 
      }}>
      {children({ willDrop, didDrop, dropItem })}
    </div>
  )
}