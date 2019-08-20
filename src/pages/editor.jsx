import React, { useState, Fragment } from 'react'
import { Button } from '@bigfinite/component-library'
import Resizer from '../components/resizer.jsx'
import MonacoEditor from '../components/monaco-editor'
import { Provider as DndProvider, Draggable, Target } from '../components/dnd.jsx'

const ItemTypes = {
  BOX: 'box',
}

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
const FUNCTION = `function() {}`

const DO_WHILE = `do {} while ()`

const FOR = `for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
`

const RANDOM_NUMBER = Math.random()

const snippets = [
  { name: 'function', snippet: FUNCTION },
  { name: 'do while', snippet: DO_WHILE },
  { name: 'random number', snippet: RANDOM_NUMBER },
  { name: 'for loop', snippet: FOR },
  { name: 'function', snippet: FUNCTION },
  { name: 'do while', snippet: DO_WHILE },
  { name: 'random number', snippet: RANDOM_NUMBER },
  { name: 'for loop', snippet: FOR },
  { name: 'function', snippet: FUNCTION },
  { name: 'do while', snippet: DO_WHILE },
  { name: 'random number', snippet: RANDOM_NUMBER },
  { name: 'for loop', snippet: FOR },
]

const Tag = ({ name, snippet }) => (
  <Draggable payload={snippet}>
    <div
      style={{
        padding: '5px',
        margin: '4px',
        backgroundColor: '#3794ff',
        borderRadius: '4px',
      }}>
      {name}
    </div>
  </Draggable>
)

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

  const columnStyles = {
    float: 'left',
    width: '50%',
    padding: '10px',
    boxSizing: 'border-box'
  }

  const Tags = () => snippets
    .map((p, i) => <Tag key={i} {...p} />)

  return (
    <DndProvider>
      <div style={columnStyles}>
        <Resizer height='100%'>
          <div>
            <Tags />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Laudantium, quasi cupiditate. Animi possimus dolorem sapiente dolore quisquam 
            totam dignissimos nobis est! 
            Necessitatibus voluptatibus et commodi illum, possimus suscipit consectetur tempora.
          </p>
          <Target>
            {({ dropItem }) => {
              return (
                <div>
                  rem ipsum dolor sit amet consectetur adipisicing elit. 
                  Laudantium, quasi cupiditate.
                  {dropItem && JSON.stringify(dropItem)}
                </div>
              )
            }}
          </Target>
        </Resizer>
      </div>
      <div style={columnStyles}>
        <div className='col-12 col-right pb2'>
          <Button 
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
    </DndProvider>
  )
}