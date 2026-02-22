import './css/App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Navbar from './components/Navbar'




function App() {
  return (
  <div>
    <Navbar/>
    <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/favorites' element={<Favorite/>}/>
    </Routes>
  </main>
 
  </div>
  
  ) 
}

export default App
