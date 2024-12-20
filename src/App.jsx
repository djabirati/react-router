import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router";
import {PageAccueil} from "./app/pages.jsx";
import {PageAPropos} from "./app/about/pages.jsx";
import {Navbar} from "./components/layout/Navbar.jsx";
import {PageContact} from "./app/contact/pages.jsx";
// console.log(window.location) pour connaitre l'url d'une page

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar />
          <Routes >
              <Route path='/' element={ <PageAccueil /> }/>
              <Route path='/about' element={ <PageAPropos /> }/>
              <Route path='/contact' element={ <PageContact /> }/>
          </Routes>
      </>
  )
}

export default App
