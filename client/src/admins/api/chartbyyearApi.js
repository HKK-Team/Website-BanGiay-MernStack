import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ChartbyyearAPI() {

    const [chartbyyear, setchartbyyear] = useState([]);

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chartbyyear')
            setchartbyyear(res.data)
        }
        getdata()

    }, [])
    return {
        chartbyyear: [chartbyyear, setchartbyyear],
    }
}
export default ChartbyyearAPI