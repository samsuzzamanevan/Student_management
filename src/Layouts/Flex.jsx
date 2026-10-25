import React from 'react'

function Flex({className,children}) {
  return (
    <>
      <div className={`${className}`} style={{display:'flex'}}>
        {children}
      </div>
    </>
  )
}

export default Flex
