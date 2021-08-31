import React, { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function BannerAPI() {
    const [bannes, setbannes] = useState([])
    const [bannergirls, setBannergirls] = useState([])
    const [bannerboys, setBannerboys] = useState([])

    // const getbanner = async() => {
    //     const res = await axios.get('http://localhost:5000/api/banner')
    //     setbannes(res.data)
    // }
    // const getbannergirls = async() => {
    //     const res = await axios.get('http://localhost:5000/api/banner_girl')
    //     setBannergirls(res.data)
    // }
    // const getbannerboys = async() => {
    //     const res = await axios.get('http://localhost:5000/api/banner_boy')
    //     setBannerboys(res.data)
    // }

    useEffect(() => {
        const promise1 = axios.get('http://localhost:5000/api/banner');
        const promise2 = axios.get('http://localhost:5000/api/banner_girl');
        const promise3 = axios.get('http://localhost:5000/api/banner_boy');

        Promise.all([promise1, promise2, promise3])
            .then(([promise1, promise2, promise3]) => {
                setbannes(promise1.data)
                setBannergirls(promise2.data)
                setBannerboys(promise3.data)
            })
            .catch(err => console.log(err))

    }, [])
    return {
        bannes: [bannes, setbannes],
        bannergirls: [bannergirls, setBannergirls],
        bannerboys: [bannerboys, setBannerboys]
    }
}
export default BannerAPI