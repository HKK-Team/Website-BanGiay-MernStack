import { useState, useEffect } from 'react'
import axios from 'axios'
//call api baner từ folder api
function ChartbyquiAPI() {

    const [chartbyqui, setchartbyqui] = useState([]);

    useEffect(() => {
        const getdata = async() => {
            const res = await axios.get('http://localhost:5000/admin/chartbyqui')
            setchartbyqui(res.data)
        }
        getdata()

    }, [])
    return {
        chartbyqui: [chartbyqui, setchartbyqui],
    }
}
export default ChartbyquiAPI