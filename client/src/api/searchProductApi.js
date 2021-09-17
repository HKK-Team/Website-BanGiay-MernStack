import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductDetailApi() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [callback, setCallback] = useState(false)
    const [currentPagesearch, setcurrentPagesearch] = useState(1)
    const [postsPerPagesearch] = useState(9)
    useEffect(() => {
        const getproductDetail = async() => {
            // search
            const res = await axios.get(`/api/products?nameProduct[regex]=${search}`)
                // check result with name if no result get product with title
            if (res.data.result === 0) {
                const ress = await axios.get(`/api/products?nameCategoryProduct[regex]=${search}`)
                setProducts(ress.data.products)
            } else setProducts(res.data.products)
        }
        getproductDetail()
    }, [callback, search])
    return {
        products: [products, setProducts],
        search: [search, setSearch],
        callback: [callback, setCallback],
        postsPerPagesearch: [postsPerPagesearch],
        currentPagesearch: [currentPagesearch, setcurrentPagesearch],
    }
}
export default ProductDetailApi