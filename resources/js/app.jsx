import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './components/utils/NotFound'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App