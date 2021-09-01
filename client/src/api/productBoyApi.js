import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBoyApi() {
    const [product_boy, setproduct_boy] = useState([])

    useEffect(() => {
        const getproductboy = async() => {
            const res = await axios.get('http://localhost:5000/api/products_boy')
            setproduct_boy(res.data)
        }
        getproductboy()

    }, [])
    return {
        product_boy: [product_boy, setproduct_boy],
    }
}
export default ProductBoyApi