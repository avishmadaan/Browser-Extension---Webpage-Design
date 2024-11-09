
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { HomePage } from './HomePage'

function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route  index  element={<HomePage />}></Route>
      <Route path='/aboutus' element=""></Route>
      
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
