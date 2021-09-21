import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ChartAPI() {

    const [chartbymonth, setchartbymonth] = useState([]);

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chart')
            setchartbymonth(res.data)
        }
        getdata()

    }, [])
    return {
        chartbymonth: [chartbymonth, setchartbymonth],
    }
}
export default ChartAPI