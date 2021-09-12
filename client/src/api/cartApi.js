import { useState, useEffect } from 'react'
import axios from 'axios'

function ProductCarts() {
    const [productCarts, setproductCarts] = useState([])

    useEffect(() => {
        const productCarts = async() => {
            const res = await axios.get('http://localhost:5000/api/cart')
            setproductCarts(res.data)
        }
        productCarts()

    }, [])

    return {
        productCarts: [productCarts, setproductCarts],
    }
}
export default ProductCarts