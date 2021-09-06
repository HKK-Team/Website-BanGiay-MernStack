import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function Banner_mainAPI() {
    const [banner_main, setbanner_main] = useState([]);
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getbanner_main = async() => {
            const res = await axios.get('http://localhost:5000/api/banner_main')
            setbanner_main(res.data)
        }
        getbanner_main()

    }, [callback])
    return {
        banner_main: [banner_main, setbanner_main],
        callback : [callback,setCallback]
    }
}
export default Banner_mainAPI