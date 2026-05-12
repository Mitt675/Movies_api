import './css/App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Favorite from './pages/favorite'
import Navbar from './components/Navbar'
import Signup from './pages/signup'
import LoginPage from './pages/loginpage'



function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorite />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<LoginPage />} />

        </Routes>
      </main>

    </div>
  )
}

export default App
