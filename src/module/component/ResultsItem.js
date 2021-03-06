import React from 'react'
import ResultItem from '../styled/ResultsItem'

export default ({data, select, tabIndex}) => {
  return <ResultItem
    onKeyDown={(e)=>{
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if(e.target.nextElementSibling){
          e.target.nextElementSibling.focus()
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        if(e.target.previousElementSibling){
          e.target.previousElementSibling.focus()
        }
      }
    }}
    onKeyPress={(e)=>{
      if(e.key === 'Enter') select(data)}
    }
    tabIndex={tabIndex}
    onClick={()=>{select(data)}}>{data}</ResultItem>
}
