import React from 'react'

const Error = () => {
  return (
    <div>
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-gray-600 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
            <a
                href='/customer'
                className="relative inline-block text-sm font-medium text-white group active:text-orange-500 focus:outline-none focus:ring"
            >
                <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <router-link to="/">Go Home</router-link>
                </span>
            </a>
            </button>
        </main>
    </div>
  )
}

export default Error