import React from 'react'

export default function CounterButton(props){ 
  return (
<button className="btn btn-dark" onClick={()=>props.functionName()}>{props.value}</button>
  )
  

}