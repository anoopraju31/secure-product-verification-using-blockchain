import { styles } from "../variables/styles"
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile, createUserDoc } from "firebase/auth"
import { auth, store } from '../firebase'
import { useNavigate } from "react-router-dom"
import { setDoc, doc, collection, createUser } from "firebase/firestore"

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [role, setRole] = useState('Manufacture')
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const collectionRef = collection(store, 'users')

    const handleSubmit = async (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then(async res => {
            console.log(res)
            const user = res.user
            // await updateProfile(user, {
            //     displayName: name
            // })
            await setDoc(doc(collectionRef, email), {
                uid: user.uid,
                username: name,
                role: role,
                email: email
            })
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container w-10/12 mx-auto">
            <section className="h-screen flex justify-center items-center">
                <div className="container px-6 py-12">
                    <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 sm:hidden md:block mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="md:w-6/12 lg:w-full mx-auto md:mb-4"
                                alt="Phone_image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
                                <a
                                    className="px-7 py-3 text-white font-medium text-sm bg-blue-600 leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <FcGoogle className="mr-5"/>
                                    Sign up with Google
                                </a>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0"> OR </p>
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="username"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className={styles.input}
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6">
                                <div className="flex justify-center">
                                    <div className="dropdown relative w-full">
                                        <p
                                            className=" dropdown-toggle px-6 flex justify-center  py-2.5  bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out items-center whitespace-nowrap "
                                            // href="/"
                                            // type="button"
                                            // id="dropdownMenuButton2"
                                            // data-bs-toggle="dropdown"
                                            // aria-expanded="false"
                                            onClick={() => setToggle(prev => !prev)}
                                        >
                                            {role}
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="caret-down"
                                                className="w-2 ml-2"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                                />
                                            </svg>
                                        </p>
                                        <ul
                                            className={`dropdown-menu w-full absolute   bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 ${toggle? 'block' : 'hidden'} m-0 bg-clip-padding border-none`}
                                            aria-labelledby="dropdownMenuButton2"
                                        >
                                            <li 
                                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" 
                                                onClick={() => {setRole('Manufacture'); setToggle(prev => !prev)}}    
                                            >
                                                Manufacture
                                            </li>
                                            <li 
                                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100"
                                                onClick={() => {setRole('Retailer'); setToggle(prev => !prev)}}
                                            >
                                                Retailer
                                            </li>
                                            <li 
                                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100"
                                                onClick={() => {setRole('Customer'); setToggle(prev => !prev)}}    
                                            >
                                                Customer
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className={styles.input}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className={styles.input}
                                        placeholder="Confirm Password"
                                        value={repassword}
                                        onChange={(e) => setRepassword(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={handleSubmit}
                                >
                                    Sign Up
                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login