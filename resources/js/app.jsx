import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Listings from './pages/Listings'
import NotFound from './components/utils/NotFound'
import Navbar from './components/utils/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/listings' element={<Listings/>} />
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App