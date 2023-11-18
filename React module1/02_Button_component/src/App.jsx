import { useState } from 'react'

import Button from './Button'
function App() {


  return (
    <> 
      <Button text = "Click me!" onClick = {()=>alert("Button clicked")}/>
    </>
  )
}

export default App
