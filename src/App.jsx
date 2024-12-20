import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router";
// console.log(window.location) pour connaitre l'url d'une page





function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes >
        <Route path='/' element={ <PageAccueil /> }/>
        <Route path='/about' element={ <PageAPropos /> }/>
    </Routes>
  )
}

export default App
