import React from 'react'

function Container({className,children}) {
  return (
    <>
      <div className={`${className}`} style={{width:'1170px'}} >
            {children}
      </div>
    </>
  )
}

export default Container
