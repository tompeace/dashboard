import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import React, { useState, useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDrop } from 'react-dnd'
import { processSize, noop } from '@helpers'
import styled from 'styled-components'
import * as customTheme from './theme'
import * as customLanguage from './language'

const ItemTypes = {
  EDITOR_ITEM: 'box'
}

const StyledEditor = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid gray;
`

export default function MonacoEditor({
  width = '100%',
  height = '100%',
  value = null,
  defaultValue = '',
  options = {},
  overrideServices = {},
  droppableItems = false,
  language = 'custom-language',
  theme = 'vs',
  editorDidMount: _editorDidMount = noop,
  onChange = noop
}) {
  let __prevent_trigger_change_event = false

  const editorRef = useRef(null)
  const subscriptionRef = useRef(null)
  const [cursor, setCursor] = useState([])

  const [{ didDrop, dropItem }, dropRef] = useDrop({
    accept: droppableItems,
    collect: monitor => ({
      didDrop: monitor.didDrop(),
      dropItem: monitor.getItem()
    })
  })

  const getModel = () => editorRef.current.getModel()

  // initialise monaco
  useEffect(() => {
    initMonaco()
    return () => destroyMonaco()
  }, [])
  
  // listen for react-dnd dropped items
  useEffect(() => {
    if (dropItem) {
      const { range } = editorRef.current.getTargetAtClientPoint(...cursor)
      writeToEditor(dropItem.payload, range)
    }
  }, [didDrop])

  // update code inside editor
  useEffect(() => {
    writeToEditor(value)
  }, [value])

  // update editor language (i.e. javascript)
  useEffect(() => {
    monaco.editor.setModelLanguage(getModel(), language)
  }, [language])

  // update editor theme
  useEffect(() => {
    monaco.editor.setTheme(theme)
  }, [theme])

  // update editor options
  useEffect(() => {
    editorRef.current.updateOptions(options)
  }, [options])

  function initMonaco() {
    console.log(customLanguage.name, customLanguage.rules);
    
    monaco.editor.defineTheme(
      customTheme.name, 
      customTheme.rules
    )

    monaco.languages.registerCompletionItemProvider(
      customLanguage.name, 
      customLanguage.rules
    )

    if (editorRef.current) {
      editorRef.current = monaco.editor.create(
        editorRef.current,
        {
          value: value || defaultValue,
          language,
          theme,
          ...options
        },
        overrideServices
      )
      editorDidMount()
    }
  }
  
  function destroyMonaco() {
    if (editorRef.current) {
      editorRef.current.dispose()
    }
    if (subscriptionRef.current) {
      subscriptionRef.current.dispose()
    }
  }
  
  function editorDidMount() {
    subscriptionRef.current = editorRef.current.onDidChangeModelContent(() => {
      if (!__prevent_trigger_change_event) {
        onChange(editorRef.current.getValue())
      }
    })
    _editorDidMount(editorRef.current, monaco)
  }

  function writeToEditor(text, range = null) {
    const model = getModel()
    __prevent_trigger_change_event = true
    
    editorRef.current.pushUndoStop()
    model.pushEditOperations([], [{
      range: range || model.getFullModelRange(),
      text
    }])
    editorRef.current.pushUndoStop()
    
    __prevent_trigger_change_event = false
  }
  
  function handleDragOver({ clientX, clientY }) {
    setCursor([clientX, clientY])
  }
  
  return (
    <StyledEditor
      ref={dropRef}
      onDragOver={handleDragOver}>
      <div
        ref={editorRef}
        style={{
          height: processSize(height),
          width: processSize(width)
        }}
      />
    </StyledEditor>
  )
}

MonacoEditor.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  droppableItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}