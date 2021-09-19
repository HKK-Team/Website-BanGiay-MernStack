import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductGirlApi() {
    const [product_girl, setproduct_girl] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorgirl, setcolorgirl] = useState(' ')
    const [sizemingirl, setsizemingirl] = useState(' ')
    const [detailCategorygirl, setdetailCategorygirl] = useState(' ')
    const [sizemaxgirl, setsizemaxgirl] = useState(' ')
    const [currentPagegirl, setcurrentPagegirl] = useState(1)
    const [postsPerPagegirl] = useState(9)
    const [maxPicegirl, setmaxPicegirl] = useState([])
    const [minPricegirl, setminPricegirl] = useState([])

    useEffect(() => {
        const getproductgirl = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_girl?${minPricegirl}&${maxPicegirl}&${detailCategorygirl}&${sizemingirl}&${sizemaxgirl}&${colorgirl}&${sort}`)
            setproduct_girl(res.data)
        }
        getproductgirl()

    }, [callback, sort, colorgirl, sizemingirl, sizemaxgirl, detailCategorygirl, maxPicegirl, minPricegirl])
    return {
        product_girl: [product_girl, setproduct_girl],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorgirl: [colorgirl, setcolorgirl],
        sizemingirl: [sizemingirl, setsizemingirl],
        sizemaxgirl: [sizemaxgirl, setsizemaxgirl],
        detailCategorygirl: [detailCategorygirl, setdetailCategorygirl],
        postsPerPagegirl: [postsPerPagegirl],
        currentPagegirl: [currentPagegirl, setcurrentPagegirl],
        maxPicegirl: [maxPicegirl, setmaxPicegirl],
        minPricegirl: [minPricegirl, setminPricegirl]
    }
}
export default ProductGirlApi