import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGostoApi() {
    const [product_gosto, setproduct_gosto] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorgosto, setcolor] = useState(' ')
    const [sizemingosto, setsizemingosto] = useState(' ')
    const [detailCategorygosto, setdetailCategorygosto] = useState(' ')
    const [sizemaxgosto, setsizemaxgosto] = useState(' ')
    const [currentPagegosto, setcurrentPagegosto] = useState(1)
    const [postsPerPagegosto] = useState(9)
    const [maxPicegosto, setmaxPicegosto] = useState([])
    const [minPricegosto, setminPricegosto] = useState([])

    useEffect(() => {
        const getproducgosto = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_gosto?${minPricegosto}&${maxPicegosto}&${detailCategorygosto}&${sizemingosto}&${sizemaxgosto}&${colorgosto}&${sort}`)
            setproduct_gosto(res.data)
        }
        getproducgosto()

    }, [callback, sort, colorgosto, sizemingosto, sizemaxgosto, detailCategorygosto, maxPicegosto, minPricegosto])
    return {
        product_gosto: [product_gosto, setproduct_gosto],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorgosto: [colorgosto, setcolor],
        sizemingosto: [sizemingosto, setsizemingosto],
        sizemaxgosto: [sizemaxgosto, setsizemaxgosto],
        detailCategorygosto: [detailCategorygosto, setdetailCategorygosto],
        currentPagegosto: [currentPagegosto, setcurrentPagegosto],
        postsPerPagegosto: [postsPerPagegosto],
        maxPicegosto: [maxPicegosto, setmaxPicegosto],
        minPricegosto: [minPricegosto, setminPricegosto]
    }
}
export default ProductGostoApi