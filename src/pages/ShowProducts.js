import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import contractABI from '../GiveForever.json'
import { contractAddress } from '../variables/adddress'

const loadProducts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractABI, signer)
    const productCount = await contract.productCount()
    const count = await parseInt(productCount, 16)
    console.log(count)

    const productList = []
    for (let i = 1; i <= count; i++) {
        const product = await contract.products(i)
        // product.productId = parseInt(product?.productId, 16)
        // product.manufactureDate = parseInt(product?.manufactureDate, 16)
        // product.expiryDate = parseInt(product?.expiryDate, 16)
        productList.push(product)
        // console.log(product)
    }


    // await contract.products
    return await productList
}

const ShowProducts = () => {
    const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState(0)

    const formatted_date = (nd) => {
        var d = new Date(nd)
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    }


    useEffect(() => {
        const getData = async () => {

            await loadProducts().then(productList => setProducts(productList))
            // console.log(products);
            setProductCount(products.length)
        }

        getData()
    }, [productCount])
    

    return (
        <div className='relative col-start-1 col-end-3 custom-scroll'  style={{height: '374px'}}>
            <table className=" table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th  scope="col" className="py-3 px-6"> Product Id </th>
                        <th  scope="col" className="py-3 px-6"> Name </th>
                        <th  scope="col" className="py-3 px-6"> Price </th>
                        <th  scope="col" className="py-3 px-6"> Manufacturing Date </th>
                        <th  scope="col" className="py-3 px-6"> Expiry Date </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, idx) => 
                            <tr key={idx} className={`bg-white border-b ${(idx % 2 === 0)? 'dark:bg-gray-900': 'dark:bg-gray-800'} dark:border-gray-700`}>
                                <td className='text-sm text-white font-medium px-6 py-4 whitespace-wrap'> {parseInt(product[0]._hex, 16)} </td>
                                <td className='text-sm text-white font-medium px-6 py-4 whitespace-wrap'> {product[1]} </td>
                                <td className='text-sm text-white font-medium px-6 py-4 whitespace-wrap'> {parseInt(product[2]._hex, 16)} </td>
                                <td className='text-sm text-white font-medium px-6 py-4 whitespace-wrap'> {formatted_date(parseInt(product[3]._hex, 16))} </td>
                                <td className='text-sm text-white font-medium px-6 py-4 whitespace-wrap'> {formatted_date(parseInt(product[4]._hex, 16))} </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts