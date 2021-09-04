import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGirlApi() {
    const [product_girl, setproduct_girl] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorgirl, setcolorgirl] = useState(' ')

    useEffect(() => {
        const getproductgirl = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_girl?${colorgirl}&${sort}`)
            setproduct_girl(res.data)
        }
        getproductgirl()

    }, [callback, sort, colorgirl])
    return {
        product_girl: [product_girl, setproduct_girl],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorgirl: [colorgirl, setcolorgirl]
    }
}
export default ProductGirlApi