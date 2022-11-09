import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import ShowProducts from './pages/ShowProducts'
// import Tabination from './pages/Tabination';
import Customer from './pages/Customer';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useState } from 'react';
import Error from './pages/Error';

function App() {
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUsername(user? user.displayName : '')
      console.log(user)
    })
  }, [])
  
  const RequireAuth = ({children}) => {
		return username? children : <Navigate to='/login' />
	}


  return (
    <div className="h-full dark:bg-gray-900">

      {/* <div className="container sm:w-full sm:px-4 md:w-11/12 lg:w-4/5 mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        <ShowProducts />
        <Tabination />
      </div> */}

      <Router>
        {/* <nav>
          <Link to='/'> Home </Link>
          <Link to='/profile/anoop'> Profile </Link>
          <Link to='/about'> About </Link>
        </nav> */}

        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/profile/:username' element={<Profile />} /> */}
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          
          <Route path='/customer' element={<RequireAuth> <Customer user={username} /> </RequireAuth>} />
          <Route path='*' element={<Error />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
