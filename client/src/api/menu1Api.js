import { useState, useEffect } from 'react'
import axios from 'axios'
//call api menu từ folder api
function Menu1API() {
    const [menus, setMenus] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getmenu1 = async() => {

            const res = await axios.get('http://localhost:5000/api/menu1')
            setMenus(res.data)
        }
        getmenu1()
    }, [callback])

    return {
        menus: [menus, setMenus],
        callback : [callback,setCallback]
    }
}
export default Menu1API