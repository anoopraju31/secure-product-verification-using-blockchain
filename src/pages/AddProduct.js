import { useState } from 'react'
import { ethers } from 'ethers'
import contractABI from '../GiveForever.json'
import { styles } from '../variables/styles'
import { contractAddress } from '../variables/adddress'


const AddProduct = () => {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [manufacturingDate, setManufacturingDate] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    const submit = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractABI, signer)
        console.log(productName, price, manufacturingDate, expiryDate);
        await contract.addProduct(productName, price, manufacturingDate, expiryDate)
        .then(response => console.log(response))    
    }

    return (
        <div>
            <form>
                <div className={styles.outerDiv}>
                    <input 
                        id="product_name" 
                        type="text" 
                        className={styles.input} 
                        placeholder="" 
                        required 
                        autoComplete="off"
                        value={productName} 
                        onChange={(e) => setProductName(e.target.value)} 
                    />
                    <label 
                        htmlFor="product_name"
                        className={styles.label}
                    > 
                        Product Name 
                    </label>
                </div>
                
                <div className={styles.outerDiv}>
                    <input 
                        id="product_price" 
                        type="text" 
                        className={styles.input} 
                        placeholder="" 
                        required 
                        autoComplete="off"
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                    <label 
                        htmlFor="product_price"
                        className={styles.label}
                    > 
                        Product Price 
                    </label>
                </div>
                
                <div className={styles.outerDiv}>
                    <input 
                        id="product_manufacturing_date" 
                        type="text" 
                        className={styles.input} 
                        placeholder="" 
                        required 
                        autoComplete="off"
                        value={manufacturingDate} 
                        onChange={e => setManufacturingDate(e.target.value)} 
                    />
                    <label 
                        htmlFor="product_manufacturing_date"
                        className={styles.label}
                    > 
                        Product Manufacturing Date 
                    </label>
                </div>

                <div className={styles.outerDiv}>
                    <input 
                        id="product_expiry_date" 
                        type="text" 
                        className={styles.input} 
                        placeholder="" 
                        required 
                        autoComplete="off"
                        value={expiryDate} 
                        onChange={e => setExpiryDate(e.target.value)} 
                    />
                    <label 
                        htmlFor="product_expiry_date"
                        className={styles.label}
                    > 
                        Product Expiry Date
                    </label>
                </div>
                
                <button className={styles.button} onClick={()=> {submit(); return false}}> add product </button>
            </form>
        </div>
    )
}

export default AddProduct