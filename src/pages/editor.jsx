import React, { useState, Fragment } from 'react'
import { Button } from '@bigfinite/component-library'
import Resizer from '../components/resizer.jsx'
import MonacoEditor from '../components/monaco-editor'
import { Provider as DndProvider, Draggable, Target } from '../components/dnd.jsx'
import Snippets from '../components/snippets.jsx'
import { css } from 'styled-components'


const options = { 
  selectOnLineNumbers: true,
  selectionHighlight: false,
  overviewRulerBorder: false,
  glyphMarginWidth: 100,
  minimap: {
    enabled: false
  },
  scrollbar: {
    useShadows: false,
    vertical: 'hidden',
    horizontal: 'hidden'
  }
}

export default function Editor(props) {
  const [ code, setCode ] = useState('')
  const [ result, setResult ] = useState('')
  const [ error, setError ] = useState('')
  const [ selected, setSelected ] = useState('')

  const handleChange = (value, e) => {
    console.log('change:', value)
    setCode(value)
  }

  const handleRun = () => {
    try {
      const evaluated = eval(code)
      setResult(evaluated)
      error && setError(null)
    } catch (error) {
      setResult(null)
      setError(JSON.stringify(error, null, 4))
    }
  }

  const leftColumn = css`
    float: left;
    width: 25%;
    box-sizing: border-box;
    background-color: #F5F6FA;
  `

  const rightColumn = css`
    float: left;
    width: 75%;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
  `

  const disabled = code.length === 0 || error;

  const Description = ({ name, description, args }) => name ? (
    <div css={css`
      padding: 20px;
    `}>
      <b>fx {name}</b>
      <p>{description}</p>
      <div style={{ fontSize: '12px' }}>
        <p>
          <b>{name}</b>
          <span>{args ? `${args.map(a => a.name).join(', ')}` : ''}</span>
        </p>
        <ul>
          {args && args.map(({ name, description }) => (
            <li key={name}><em>{name}:</em> {description}</li>
          ))}
        </ul>
      </div>
    </div>
  ) : null

  return (
    <DndProvider>
      <div style={{ height: '700px' }}>
        <div css={leftColumn}>
          <Resizer>
            <Snippets 
              onSelect={setSelected} />
            <Description {...selected} />
          </Resizer>
        </div>
        <div css={rightColumn}>
          <div className='col-12 col pb2'>
            <Button
              rounded
              className='right'
              disabled={disabled}
              onClick={handleRun}>
              Run
            </Button>
          </div>
          <div className='col-12 col-right'>
            <MonacoEditor
              language='javascript'
              value={code}
              options={options}
              onChange={handleChange}
              droppableItems={'box'}
            />
          </div>
          <p>
            <code>{error || result}</code>
          </p>
        </div>
      </div>
    </DndProvider>
  )
}