import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'
import MoviePage from './pages/MoviePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<MoviePage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}