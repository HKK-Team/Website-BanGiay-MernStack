import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductPkApi() {
    const [product_pk, setproduct_pk] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorpk, setcolor] = useState(' ')
    const [sizeminpk, setsizeminpk] = useState(' ')
    const [detailCategorypk, setdetailCategorypk] = useState(' ')
    const [sizemaxpk, setsizemaxpk] = useState(' ')
    const [currentPagepk, setcurrentPagepk] = useState(1)
    const [postsPerPagepk] = useState(9)
    const [maxPicepk, setmaxPicepk] = useState([])
    const [minPricepk, setminPricepk] = useState([])

    useEffect(() => {
        const getproducpk = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_pk?${minPricepk}&${maxPicepk}&${detailCategorypk}&${sizeminpk}&${sizemaxpk}&${colorpk}&${sort}`)
            setproduct_pk(res.data)
        }
        getproducpk()

    }, [callback, sort, colorpk, sizeminpk, sizemaxpk, detailCategorypk, maxPicepk, minPricepk])
    return {
        product_pk: [product_pk, setproduct_pk],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorpk: [colorpk, setcolor],
        sizeminpk: [sizeminpk, setsizeminpk],
        sizemaxpk: [sizemaxpk, setsizemaxpk],
        detailCategorypk: [detailCategorypk, setdetailCategorypk],
        currentPagepk: [currentPagepk, setcurrentPagepk],
        postsPerPagepk: [postsPerPagepk],
        maxPicepk: [maxPicepk, setmaxPicepk],
        minPricepk: [minPricepk, setminPricepk]
    }
}
export default ProductPkApi