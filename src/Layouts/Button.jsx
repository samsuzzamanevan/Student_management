import React from 'react'

function Button({className,btnText,onclick}) {
  return (
    <>
      <button className={`${className}`} onClick={onclick}>{btnText}</button>
    </>
  )
}

export default Button
