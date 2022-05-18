import logo from './logo.svg';
import './App.css';
import {useEffect, useLayoutEffect, useState} from 'react'
import UseStateComponent from './UseStateComponent';
import UseEffectExample from './UseEffectExample';

function App() {
   const [name, setName] = useState({firstname:'',lastname:''})
  useEffect(() => {
    //console.log("rendered")
  }, [])
  
  return (
    
    <>
    <h1>Hello {name.firstname}  {name.lastname}</h1> 
      <form>
       <input type="text" value={name.firstname} onChange = { (e) => setName({firstname:e.target.value})}> 
        </input>
      
       </form>

       <UseStateComponent></UseStateComponent>
       <UseEffectExample></UseEffectExample>

    
    </>
  );
}

export default App;
