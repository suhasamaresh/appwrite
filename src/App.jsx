import React from 'react'
import './App.css'
import Room from './pages/Room'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Room/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <Room/>
    </Router>
  )
}

export default App
