import React, { useState, Fragment } from 'react'
import Resizer from '../components/resizer.jsx'
import MonacoEditor from '../components/monaco-editor'
import { Provider as DndProvider } from '../components/dnd.jsx'
import Snippets from '../components/snippets.jsx'
import { css } from 'styled-components'

const editorOptions = { 
  selectOnLineNumbers: true,
  selectionHighlight: false,
  overviewRulerBorder: false,
  overviewRulerLanes: false,
  fontFamily: 'Roboto Mono',
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

const leftColumn = css`
    float: left;
    height: 100%;
    width: 25%;
    box-sizing: border-box;
    background-color: #F5F6FA;
  `

const rightColumn = css`
    float: left;
    height: 100%;
    width: 75%;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
  `
const Description = ({ name, description, args }) => name ? (
  <div css={`padding: 20px`}>
    <b>fx {name}</b>
    <p>{description}</p>
    <div css={`font-size: 12px`}>
      <p>
        <b>{name}</b>
        <span>
          {args ? `(${args.map(a => a.name).join(', ')})` : ''}
        </span>
      </p>
      <ul>
        {args && args.map(({ name, description }) => (
          <li key={name}><em>{name}:</em> {description}</li>
        ))}
      </ul>
    </div>
  </div>
) : null


export default function Editor(props) {
  const [ code, setCode ] = useState('')
  const [ result, setResult ] = useState('')
  const [ error, setError ] = useState('')
  const [ selected, setSelected ] = useState('')

  const disabled = code.length === 0 || error;

  function handleRun() {
    try {
      const evaluated = eval(code)
      setResult(evaluated)
      error && setError(null)
    } catch (error) {
      setResult(null)
      setError(JSON.stringify(error, null, 4))
    }
  }

  function handleInsert() {

  }

  return (
    <DndProvider>
      <div>
        <div css={leftColumn}>
          <Resizer>
            <Snippets
              onInsert={handleInsert}
              onSelect={setSelected} />
            <Description 
              {...selected} />
          </Resizer>
        </div>
        <div css={rightColumn}>
          <div className='col-12 col pb2'>
            <button
              className='right'
              disabled={disabled}
              onClick={handleRun}>
              Run
            </button>
          </div>
          <div 
            style={{ height: '700px' }} 
            className='col-12 col-right'>
            <MonacoEditor
              language='javascript'
              value={code}
              options={editorOptions}
              onChange={setCode}
              droppableItems={'box'}
            />
          </div>
          <p style={{ margin: 0 }}>
            {(error || result) && (
              <code>{error || result}</code>
            )}
          </p>
        </div>
      </div>
    </DndProvider>
  )
}