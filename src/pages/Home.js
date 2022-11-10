import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { ethers } from 'ethers'
import ProductCard from './ProductCard'
import Tabination from './Tabination'
import { auth, store } from '../firebase'
// import contractABI from '../GiveForever.json'
// import { contractAddress } from '../variables/adddress'
import { doc, runTransaction, } from 'firebase/firestore'

// const loadProducts = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum)
//     const signer = provider.getSigner()
//     const contract = new ethers.Contract(contractAddress, contractABI, signer)
//     const productCount = await contract.productCount()
//     const count = await parseInt(productCount, 16)
//     console.log(count)

//     const productList = []
//     for (let i = 1; i <= count; i++) {
//         const product = await contract.products(i)
//         // product.productId = parseInt(product?.productId, 16)
//         // product.manufactureDate = parseInt(product?.manufactureDate, 16)
//         // product.expiryDate = parseInt(product?.expiryDate, 16)
//         productList.push(product)
//         // console.log(product)
//     }


//     // await contract.products
//     return await productList
// }


const Home = () => {
    const [userRole, setUserRole] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        

        const getRole = async () => {
            let userData = localStorage.getItem('user')
            const user = JSON.parse(userData)
            const userRef = doc(store, 'users', user.email)
            await runTransaction(store, async(transaction) => {
                const ud = await transaction.get(userRef)
                if (ud.exists()) {
                    // console.log(ud._document.data.value.mapValue.fields.role.stringValue)
                    setUserRole(ud._document.data.value.mapValue.fields.role.stringValue)
                    setUsername(ud._document.data.value.mapValue.fields.username.stringValue)
                    // console.log(userRole);
                }
            })
        }

        getRole()
    }, [])

    

    const handleClick = (e) => {
        e.preventDefault()
        localStorage.setItem('user', '')
        auth.signOut()
        navigate('/login')
    }
  
    return (
        <div className='relative'>
            <div className='py-6 z-10 text-white dark:bg-gray-800 sticky top-0 right-0'>
                <div className='container w-10/12 mx-auto flex justify-between items-center'>
                    <h1> Welcome {username} {userRole} </h1>
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

export default Home