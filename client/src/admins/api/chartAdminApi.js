import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ChartAdminAPI() {

    const [chartbymonth, setchartbymonth] = useState([]);
    const [chartbyyear, setchartbyyear] = useState([]);
    const [chartbyqui, setchartbyqui] = useState([]);

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chart')
            setchartbymonth(res.data)
        }
        getdata()

    }, [])

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chartbyyear')
            setchartbyyear(res.data)
        }
        getdata()

    }, [])

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chartbyqui')
            setchartbyqui(res.data)
        }
        getdata()

    }, [])

    return {
        chartbymonth: [chartbymonth, setchartbymonth],
        chartbyyear: [chartbyyear, setchartbyyear],
        chartbyqui: [chartbyqui, setchartbyqui],
    }
}
export default ChartAdminAPI