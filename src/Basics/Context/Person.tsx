import React from 'react'
type personlist ={
    names :{
    first:string
    last:string
    }[]
    
}
export const Person=(props:personlist)=>{
  return (
    <>
    <div>
      {props.names.map((name)=>{
        return(
          <h5>
            {name.first} {name.last}
          </h5>
        )
      })}
    </div>
    <hr/>
    
    </>
  )
}

export default Person