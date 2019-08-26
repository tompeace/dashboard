import React, { useState } from 'react'
import Select from './select.jsx'
import { Draggable } from './dnd.jsx'
import snippets from './monaco-editor/snippets'
import { css } from 'styled-components'

const tag = css`
  padding: 4px 0 4px 14px;
  color: #4C5769;
  &:hover {
    color: #EBECF1;
  }
`
const tagList = css`
  // padding-top: 20px; 
`
const groupName = css`
  font-size: 12px;
  font-weight: 700;
  padding: 8px 0px 8px 5px;
`
const TagList = ({ category, functions, handleRecentlyUsed }) => {
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
  background-color: #FFFFFF;
  margin: 20px;
`
export default function Snippets() {
  const [recentlyUsed, setRecentlyUsed] = useState([])
  const [current, setCurrent] = useState('all')

  const options = snippets.reduce((acc, { name }) => 
    acc.concat({ value: name, label: name}),
    [{value: 'all', label: 'All'}]
  )
  
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

  return (
    <div css={snippetStyles}>
      <Select options={options} handleChange={setCurrent} />
      <FilteredSnippets />
    </div>
  )
}