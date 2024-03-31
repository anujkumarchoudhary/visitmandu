import { Grid } from '@mui/material'
import React, { Fragment } from 'react'
import Topbar from './components/topbar/Topbar'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <Topbar />
      <Header />
      <Routes>
        <Route path='/' element={""} />
      </Routes>
    </Fragment>
  )
}

export default App