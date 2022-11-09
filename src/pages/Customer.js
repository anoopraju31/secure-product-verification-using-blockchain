import React from 'react'
import ProductCard from './ProductCard'
import Tabination from './Tabination'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Customer = ({user}) => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        auth.signOut()
        navigate('/login')
    }
  
    return (
        <div className='relative'>
            <div className='py-6 z-10 text-white dark:bg-gray-800 sticky top-0 right-0'>
                <div className='container w-10/12 mx-auto flex justify-between items-center'>
                    <h1> Welcome {user} </h1>
                    <button onClick={handleClick}> Logout </button>
                </div>
            </div>
            
            <div className='container sm:w-11/12 pb-8 lg:w-10/12 mx-auto flex justify-between relative sm:flex-col-reverse lg:flex-row'>  
                <div className='sm:w-full lg:w-9/12 dark:text-gray-200 sm:pr-0 lg:pr-6'>
                    <h2 className='py-6 font-medium leading-tight text-3xl mt-0 mb-2'> Products </h2>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-5 justify-around flex-wrap lg:gap-4'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
                
                <div className='sm:w-full  lg:w-3/12 pt-6 relative'>
                    <div className="sticky top-24 right-0">
                        <Tabination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer