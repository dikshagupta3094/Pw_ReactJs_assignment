
import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  return (
    <div className='container'>
    
    <div className="box">
    <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>Increment</button> 
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
    </div>
  )
}

export default App
