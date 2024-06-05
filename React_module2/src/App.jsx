
import './App.css'
import Signup from './components/Signup/Signup'
import SignIn from './components/SignIn/SignIn'
import { useState } from 'react'
function App() {
const [isloggedIn,setIsLoggedIn] = useState(true)
 
const handleClick = ()=>{
  setIsLoggedIn(!isloggedIn)
}
  return (
    <>
     {isloggedIn ? (
      <SignIn handleClick={handleClick}/>
     ):(
      <Signup handleClick={handleClick}/>
     )}
    </> 
  )
}

export default App
