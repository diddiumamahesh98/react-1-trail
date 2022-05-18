import React from 'react'
import styled from 'styled-components'


const StyedButton = styled.button`
background-color:${(props)=>props.bg==='red'?'green':'blue'};
color:red;
`
export default StyedButton