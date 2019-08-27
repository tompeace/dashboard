import React, { Fragment } from 'react'
import { Container, Section, Bar } from 'react-simple-resizer'

const barStyles = {
  borderTop: '1px solid #D0D4DB',
  borderBottom: '1px solid #D0D4DB',
  padding: '4px',
  width: '100%',
  cursor: 'ns-resize',
  backgroundColor: 'white'
}

const sectionStyles = {
  overflow: 'scroll'
}

const innerBarStyles = {
  height: '4px',
  width: '20px',
  borderRadius: '4px',
  margin: '0 auto',
  backgroundColor: 'gray'
}

export default function Resizer({ children }) {
  return (
    <Container 
      vertical
      style={{ height: '100%' }}>
      {children.map((child, i) => {
        return i + 1 !== children.length ? (
          <Fragment key={i}>
            <Section styles={sectionStyles}>
              {child}
            </Section>
            <Bar style={barStyles}>
              <div style={innerBarStyles} />
            </Bar>
          </Fragment>
        ) : (
          <Section 
            key={i}
            styles={sectionStyles}>
            {child}
          </Section>
        )
      })}
    </Container>
  )
}

