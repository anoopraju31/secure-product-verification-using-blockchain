import { styles } from "../variables/styles"
// import { FcGoogle } from 'react-icons/fc'
import { useState } from "react"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then(async res => {
            navigate('/customer')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container w-10/12 mx-auto">
            <section className="h-screen flex justify-center items-center">
                <div className="container px-6 py-12">
                    <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Phone_image"
                            />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form>
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
                                    <input
                                        type="password"
                                        className={styles.input}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            checked
                                        />
                                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"> Remember me </label>
                                    </div>
                                    
                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    > Forgot password? </a>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    onClick={handleSubmit}
                                >
                                    Sign in
                                </button>

                                {/* <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0"> OR </p>
                                </div> */}

                                {/* <a
                                    className="px-7 py-3 text-white font-medium text-sm bg-blue-600 leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                    href="#!"
                                    role="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <FcGoogle className="mr-5"/>
                                    Continue with Google
                                </a> */}
                                
                                <a 
                                    href='/signup'
                                    className="w-full block px-auto py-4 text-center text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
                                >
                                    <p className="text-white inline"> Don’t have an account yet? Sign up </p> sign up
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login