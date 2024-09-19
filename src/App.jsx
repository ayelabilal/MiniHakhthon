import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Buttons from './Components/Buttons'
import Cards from './Components/Cards'
import Form from './Components/Form'
import Tables from './Components/Tables'
import Navbar from './Components/Navbar'
import Login from './Screens/Login'
import Signup from './Screens/Signup'

const App = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/button' element={<Buttons/>}/>
         <Route path='/card' element={<Cards/>}/>
         <Route path='/form' element={<Form/>}/>
         <Route path='/table' element={<Tables/>}/>
         <Route path='/navbar' element={<Navbar/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         {/* <Route path='/' element={}/> */}
      </Routes>
    </div>
  )
}

export default App
