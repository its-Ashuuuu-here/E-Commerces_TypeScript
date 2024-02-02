import React from 'react'
type parent ={
    children : React.ReactNode
}
export const  Par=(props:parent)=> {
  return (
    <div>{props.children}</div>
  )
}

