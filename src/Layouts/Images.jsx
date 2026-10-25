import React from 'react'

function Images({className,src}) {
  return (
    <>
      <img src={src} alt="" className={`${className}`}/>
    </>
  )
}

export default Images
