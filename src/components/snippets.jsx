import React, { useState } from 'react'
import Select from './select.jsx'
import { Draggable } from './dnd.jsx'
import snippets from './monaco-editor/snippets'
import { css } from 'styled-components'
import { noop } from '@helpers'

const tag = css`
  padding: 4px 0 4px 14px;
  color: #4C5769;
  &:hover {
    background-color: #EBECF1;
  }
`
const tagList = css`
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  border-color: gray;
  background-color: white;
`
const groupName = css`
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0px 8px 5px;
`

const TagList = ({ 
  category = '', 
  functions = [], 
  handleRecentlyUsed = noop
}) => {
  return functions.length > 0 && (
    <div css={tagList}>
      <div css={groupName}>
        {category}
      </div>
      <div>
        {functions.map(({ name, description }) => (
          <Draggable
            key={name}
            onDrop={handleRecentlyUsed}
            payload={description}>
            <div css={tag}>
              {name}
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  )
}

const snippetStyles = css`
  // background-color: #FFFFFF;
  margin: 20px;
`
const inputStyles = css`
  box-sizing: border-box;
  padding: 0 0 0 10px;
  outline: 0;
  border: 0;
  color: inherit;
  border-radius: 4px;
  border: 1px solid;
  background-color: white;
  background-image: none;
  display: block;
  width: 100%;
  height: 34px;
  font-size: 14px;
`
export default function Snippets() {
  const [recentlyUsed, setRecentlyUsed] = useState([])
  const [current, setCurrent] = useState('all')

  const options = snippets.reduce((acc, { name }) => 
    acc.concat({ value: name, label: name}),
    [{value: 'all', label: 'All'}]
  )
  
  console.log(current);

  const FilteredSnippets = () => snippets
    .filter(s => current !== 'all' ? s.name === current : true)
    .reduce((acc, { name, functions }) => acc.concat(
      <TagList
        key={name}
        category={name}
        functions={functions}
        handleRecentlyUsed={setRecentlyUsed}
      />
    ), [
      <TagList
        key='recent'
        category='Recently used'
        functions={recentlyUsed}
      />
    ])
  
  function handleSelect({ value }) {
    setCurrent(value)
  }
  
  function handleSearch(e) {
    const { value } = e.target
    console.log('hello', value)
  }

  return (
    <div css={snippetStyles}>
      <Select 
        options={options} 
        onChange={handleSelect} />
      <br/>
      <input
        css={inputStyles}
        placeholder='Search fx...'
        onChange={handleSearch} />
      <FilteredSnippets />
    </div>
  )
}