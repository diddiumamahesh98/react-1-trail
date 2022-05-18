import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
const [windowsize, setWindowsize] = useState(window.innerWidth)

const handleResize = () => {
    setWindowsize(window.innerWidth)
    console.log(window)
}

useEffect(() =>{
    window.addEventListener('click',handleResize)   
},[windowsize])
  return (
    <div>{windowsize}</div>
  )
}

export default UseEffectExample