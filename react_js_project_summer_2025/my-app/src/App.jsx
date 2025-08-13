import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car'

function App() {
  const [count, setCount] = useState(0)
    let name = "A";
  return (
    <>
      <div>
          <h1>Hello {name}</h1>
        <Car/>
      </div>
    </>
  )
}

export default App
