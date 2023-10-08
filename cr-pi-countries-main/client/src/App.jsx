import{ Route, Routes, BrowserRouter } from 'react-router-dom'

import homePage from '../src/views/home/homePage'
import formPage from '../src/views/form/formPage'
import detailPage from '../src/views/detail/detailPage'
import landingPage from '../src/views/landing/landingPage'


import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
    <Route path='/' Component={landingPage} />
    <Route exact path='/home' Component={homePage} />
    <Route path='/home/:ID' Component={detailPage} />
    <Route path='/create' Component={formPage} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
