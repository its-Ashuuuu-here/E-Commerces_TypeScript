import React from 'react'
type task={
    name:string
    message?:string
    IsLogging?:boolean
}

export const  Task = (props:task)=> {
  return (

    <div >
        {props.IsLogging ? `Welcome ${props.name} and ${props.message}`: `Wellcome guest`}
        
        
        </div>
     
  )
}

