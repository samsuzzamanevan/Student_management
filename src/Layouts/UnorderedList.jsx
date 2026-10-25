import React from 'react'

function UnorderedList({className,ListText,onclick}) {
  return (
    <>
      <li className={`${className}`} onClick={onclick}>{ListText}</li>
    </>
  )
}

export default UnorderedList
