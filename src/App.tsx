
import { useState } from 'react'
import './App.css'
import { TextContext } from './context/TextContext'
import { MyTextComponent } from './component/MyTextComponent'

function App() {
  const [text, setText] = useState('hejhej')

  return (
    <>
    <TextContext.Provider value={{text, setText}}>
        <h2>Root app</h2>
        <p>{text}</p>
        <MyTextComponent/>
    </TextContext.Provider>

</>
  )
}

export default App
