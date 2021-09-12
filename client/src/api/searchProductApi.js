import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductDetailApi() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getproductDetail = async() => {
            // search
            const res = await axios.get(`/api/products?nameProduct[regex]=${search}`)
            setProducts(res.data.products)
        }
        getproductDetail()
    }, [callback,search])
    return {
        products: [products, setProducts],
        search: [search, setSearch],
        callback : [callback,setCallback],
    }
}
export default ProductDetailApi