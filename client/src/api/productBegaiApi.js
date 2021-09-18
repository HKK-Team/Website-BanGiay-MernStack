import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ProductBegaiApi() {
    const [product_begai, setproduct_begai] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState(' ')
    const [colorbegai, setcolor] = useState(' ')
    const [sizeminbegai, setsizeminbegai] = useState(' ')
    const [detailCategorybegai, setdetailCategorybegai] = useState(' ')
    const [sizemaxbegai, setsizemaxbegai] = useState(' ')
    const [currentPagebegai, setcurrentPagebegai] = useState(1)
    const [postsPerPagebegai] = useState(9)
    const [maxPicebegai, setmaxPicebegai] = useState([])
    const [minPricebegai, setminPricebegai] = useState([])

    useEffect(() => {
        const getproducbegai = async() => {
            const res = await axios.get(`http://localhost:5000/api/products_begai?${minPricebegai}&${maxPicebegai}&${detailCategorybegai}&${sizeminbegai}&${sizemaxbegai}&${colorbegai}&${sort}`)
            setproduct_begai(res.data)
        }
        getproducbegai()

    }, [callback, sort, colorbegai, sizeminbegai, sizemaxbegai, detailCategorybegai, maxPicebegai, minPricebegai])
    return {
        product_begai: [product_begai, setproduct_begai],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        colorbegai: [colorbegai, setcolor],
        sizeminbegai: [sizeminbegai, setsizeminbegai],
        sizemaxbegai: [sizemaxbegai, setsizemaxbegai],
        detailCategorybegai: [detailCategorybegai, setdetailCategorybegai],
        currentPagebegai: [currentPagebegai, setcurrentPagebegai],
        postsPerPagebegai: [postsPerPagebegai],
        maxPicebegai: [maxPicebegai, setmaxPicebegai],
        minPricebegai: [minPricebegai, setminPricebegai]
    }
}
export default ProductBegaiApi