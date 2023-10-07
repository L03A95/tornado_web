import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    </>
  )
}

export default App
