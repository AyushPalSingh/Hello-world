import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  return (
    // item -> vertically center
    // justify-center -> horizontally center
  <div>
    <div className="App w-screen h-screen flex flex-col items-center justify-center">   
        My Counter
        <Card />
    </div>
    <div>
        
    </div>
  </div>
  )
}
export default App
