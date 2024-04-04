import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import Topbar from './components/topbar/Topbar'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About'

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App