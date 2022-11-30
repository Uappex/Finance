import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import Register from './views/Register'

function App() {

  return (   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>   
      </BrowserRouter>   
  )
}

export default App
