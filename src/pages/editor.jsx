import React, { useState, Fragment } from 'react'
import { Button } from '@bigfinite/component-library'
import Resizer from '../components/resizer.jsx'
import MonacoEditor from '../components/monaco-editor'
import { Provider as DndProvider, Draggable, Target } from '../components/dnd.jsx'
import Snippets from '../components/snippets.jsx'
import { css } from 'styled-components'
import { Container, Section, Bar } from 'react-simple-resizer';


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

  const handleMount = () => {
    // console.log('mount:', arguments)
  }

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
    padding: 40px;
    box-sizing: border-box;
  `

  const disabled = code.length === 0 || error;

  return (
    <DndProvider>
      <div>
        <div css={leftColumn}>
          <Resizer>
            <Snippets />
            <Fragment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Laudantium, quasi cupiditate. Animi possimus dolorem sapiente dolore quisquam 
              totam dignissimos nobis est! 
              Necessitatibus voluptatibus et commodi illum, possimus suscipit consectetur tempora.
            </Fragment>
            <Fragment>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Laudantium, quasi cupiditate. Animi possimus dolorem sapiente dolore quisquam 
              totam dignissimos nobis est! 
              Necessitatibus voluptatibus et commodi illum, possimus suscipit consectetur tempora.
            </Fragment>
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
              width='100%'
              height='100%'
              language='javascript'
              value={code}
              options={options}
              onChange={handleChange}
              editorDidMount={handleMount}
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