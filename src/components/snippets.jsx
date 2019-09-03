import React, { useState } from 'react'
import { Button } from '@bigfinite/component-library'
import Select from './select'
import { Draggable } from './dnd.jsx'
import snippets from './monaco-editor/snippets'
import { css } from 'styled-components'
import { noop } from '@helpers'

const gray = '#D0D4DB'
const blue = '#0095F2'

const tag = css`
  padding: 4px 4px 4px 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  
  &:hover {
    background-color: #EBECF1;
    border-color: blue;
    cursor: pointer;
  }
`
const tagList = css`
  background-color: white;
`
const groupName = css`
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0px 8px 5px;
`
const snippetStyles = css`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const inputStyles = css`
  position: relative;
  flex-shrink: 0;
  margin-bottom: -1px;
  box-sizing: border-box;
  padding: 0 0 0 10px;
  outline: 0;
  color: inherit;
  border-radius: 4px;
  border: 1px solid #D0D4DB;
  background-color: white;
  background-image: none;
  width: 100%;
  height: 34px;
  font-size: 14px;
`
const filteredStyles = css`
  flex: 1;
  overflow: scroll;
  margin-bottom: 20px;
  border-radius: 4px;
  border-right: 1px solid ${gray};
  border-left: 1px solid ${gray};
  border-bottom: 1px solid ${gray};
`
const buttonStyles = css`
  flex-shrink: 0;
`


const TagList = ({ 
  category = '', 
  functions = [], 
  onSelect: handleClick = noop,
  onItemDropped: handleItemDropped = noop,
  removeRecentlyUsed: handleDeleteItem = noop
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

const FilteredSnippets = ({ 
  snippets = [], 
  search = '', 
  category = '', 
  viewDetails = noop
}) => {
  const [recentlyUsed, setRecentlyUsed] = useState([])
  const removeRecentlyUsed = n => setRecentlyUsed(old => old.filter(o => o !== n))
  const byCategory = c => category !== 'all' ? c.name === category : true
  const byName = f => f.name.toLowerCase().includes(search)

  return (
    <div css={filteredStyles}>
      {snippets
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
            onRemove={removeRecentlyUsed}
          />
        ]
      )}
    </div>
  )
}

export default function Snippets({ 
  onSelect: setSelected = noop 
}) {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  const options = [{ value: 'all', label: 'All' }]
    .concat(snippets.map(s => ({ value: s.name, label: s.name })))
  
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
      <input
        css={inputStyles}
        placeholder='Search fx...'
        onChange={handleSearch} />
      <FilteredSnippets 
        snippets={snippets} 
        search={search} 
        category={category} 
        viewDetails={viewDetails} />
      <Button
        css={buttonStyles}
        modifier='tertiary'
        onClick={console.log}>
        fx insert
      </Button>
    </div>
  )
}