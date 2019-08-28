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
  onSelect: handleClick = noop,
  onItemDropped: handleItemDropped = noop
}) => {
  return functions.length > 0 && (
    <div css={tagList}>
      <div css={groupName}>
        {category}
      </div>
      <div>
        {functions.map(({ name, description }) => (
          <Draggable
            id={name}
            key={name}
            onClick={handleClick}
            onDrop={handleItemDropped}
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
  margin: 20px;
`
const inputStyles = css`
  input {
    position: relative;
    margin-bottom: -1px;
    box-sizing: border-box;
    padding: 0 0 0 10px;
    outline: 0;
    color: inherit;
    border-radius: 4px;
    border: 1px solid #D0D4DB;
    background-color: white;
    background-image: none;
    display: block;
    width: 100%;
    height: 34px;
    font-size: 14px;
  }
`
export default function Snippets({ 
  onSelect: setSelected = noop 
}) {
  const [recentlyUsed, setRecentlyUsed] = useState([])
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const options = [{ value: 'all', label: 'All' }]
    .concat(snippets.map(s => ({ value: s.name, label: s.name })))
  
  // filters
  const byCategory = c => category !== 'all' ? c.name === category : true
  const byName = f => f.name.toLowerCase().includes(search)

  const FilteredSnippets = () => snippets
    .filter(byCategory)
    .reduce((acc, { name, functions }) => acc.concat(
      <TagList
        key={name}
        category={name}
        functions={functions.filter(byName)}
        onSelect={viewDetails}
        onItemDropped={setRecentlyUsed}
      />
    ), [
      <TagList
        key='recent'
        category='Recently used'
        functions={recentlyUsed}
      />
    ])
  
  function selectCategory(e) {
    const { value } = e
    setSelected(false)
    setCategory(value)
  }
  
  function handleSearch(e) {
    const { value } = e.target
    setSearch(value)
  }

  function viewDetails(e) {
    const value = snippets
      .flatMap(s => s.functions)
      .find(s => s.name === e.id)
    setSelected(old => value !== old && value)
  }

  return (
    <div css={snippetStyles}>
      <Select 
        options={options} 
        onChange={selectCategory} />
      <br/>
      <div css={inputStyles}>  
        <input
          placeholder='Search fx...'
          onChange={handleSearch} />
        <FilteredSnippets />
      </div>
    </div>
  )
}