import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/utils/Navbar'
import NotFound from './components/utils/NotFound'
import Home from './pages/Home'

import { Provider } from 'react-redux'
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </div>
    </Provider>
  )
}

export default App

