import { useState, useEffect } from 'react'
import axios from 'axios'
//call api menu từ folder api
function Menu2API() {
    const [menus2, setMenus2] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getmenu2 = async() => {
            const res = await axios.get('http://localhost:5000/api/menu2')
            setMenus2(res.data)
        }
        getmenu2()
    }, [callback])

    return {
        menus2: [menus2, setMenus2],
        callback : [callback,setCallback]
    }
}
export default Menu2API