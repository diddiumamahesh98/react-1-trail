import { useState } from "react";
import React from 'react'

const UseStateComponent = () => {
const [count, setCount]=useState(1);
console.log(count)

function clickHandler() {
 setCount(count+5)
 console.log(count)
 console.log("hi")
 //ssetCount(prev => prev+1)
 document.addEventListener('')
}
console.log(count)
  return (
    
      <>
    <button onClick={clickHandler}>+</button>
    <h1>{count}</h1>
    
    </>
  )
}

export default UseStateComponent