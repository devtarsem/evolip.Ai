import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'
import Auth from './components/auth'
import Login from './components/Login'
import Main from './components/main'
import Live from './components/live'
import Analyze from './components/analyze'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  }
  ,
  {
    path : "/auth",
    element : <Auth/>
  }
  ,
  
  {
    path : "/login",
    element : <Login/>
  }
  ,
  {
    path : "/main",
    element : <Main/>
  }
  ,
  {
    path : "/live",
    element : <Live/>
  }
  ,
  {
    path : "/analyze",
    element : <Analyze/>
  }
  
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
