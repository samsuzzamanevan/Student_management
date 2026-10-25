import React from 'react'

function Span({className,spanText}) {
  return (
    <>
      <span className={`${className}`}>{spanText}</span>
    </>
  )
}

export default Span
