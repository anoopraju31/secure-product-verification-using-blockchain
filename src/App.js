// import ShowProducts from './pages/ShowProducts'
// import Tabination from './pages/Tabination';
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Error, Home, Login, SignUp } from './pages/import'
import { auth } from './firebase'

function App() {
	const [username, setUsername] = useState('')
	
	useEffect(() => {
		auth.onAuthStateChanged(user => {
		setUsername(user? user : '')
		console.log(user)
		})
		// const user = localStorage.getItem('user')
		// if (user) setUsername(user? JSON.parse(user) : '')
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
				<Routes>
					{/* <Route path='/' element={<Home />} /> */}
					{/* <Route path='/about' element={<About />} /> */}
					{/* <Route path='/profile/:username' element={<Profile />} /> */}
				
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<SignUp />} />
					
					<Route path='/' element={<RequireAuth> <Home user={username} /> </RequireAuth>} />
					<Route path='*' element={<Error />} />
				
				</Routes>
			</Router>
		</div>
	)
}

export default App