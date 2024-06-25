import React, { useState } from 'react'
import Navbar from './Componnets/Navbar/Navbar'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [sidebar, setSidebar] = useState(true);

  return (
    <>
     <Navbar setSidebar={setSidebar}/> 
     <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
     </Routes>
    </>
  )
}

export default App
