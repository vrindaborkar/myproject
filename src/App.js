import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './routes/Landingpage'
import Home from './routes/home/Home'
import Farmer from './routes/Farmer'
import Profile from './routes/Profile'


export default function App() {

  return (
    <Routes>
        <Route path='/' element={<Landingpage/>}>
            <Route index element={<Home/>}/>
            <Route path='farmer' element={<Farmer/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
    </Routes>
  )
}