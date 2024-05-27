import { useState,useEffect } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './Layoutt/Layout'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Add from './pages/Add'
function App() {
 

  return (
    <>
<Routes>
  <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/add' element={<Add/>}/>
  </Route>
</Routes>
    </>
  )
}

export default App
