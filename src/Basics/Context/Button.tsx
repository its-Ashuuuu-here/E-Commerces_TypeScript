import React from 'react'
type buttonProps ={
    handleClick :(event:React.MouseEvent<HTMLButtonElement>, id:number)=> void
    
}
type InputProps={
  value:string
  handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}



export const Button=(props:buttonProps,props2:InputProps)=> {
  return (
    <>
    <button onClick={(event)=>props.handleClick(event,1)}>Click</button>
   
    <input type='text'  hidden value={props2.value} placeholder='Data enter' 
    onChange={props2.handleChange}/>
    </>
  )
}

