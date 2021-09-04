import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGirlApi() {
    const [product_girl, setproduct_girl] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorgirl, setcolorgirl] = useState(' ')
    const [sizemingirl, setsizemingirl] = useState(' ')
    const [sizemaxgirl, setsizemaxgirl] = useState(' ')

    useEffect(() => {
        const getproductgirl = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_girl?${sizemingirl}&${sizemaxgirl}&${colorgirl}&${sort}`)
            setproduct_girl(res.data)
        }
        getproductgirl()

    }, [callback, sort, colorgirl, sizemingirl, sizemaxgirl])
    return {
        product_girl: [product_girl, setproduct_girl],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorgirl: [colorgirl, setcolorgirl],
        sizemingirl: [sizemingirl, setsizemingirl],
        sizemaxgirl: [sizemaxgirl, setsizemaxgirl]
    }
}
export default ProductGirlApi