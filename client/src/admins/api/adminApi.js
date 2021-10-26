import { useState, useEffect } from 'react'
import { toastError } from '../components/ToastMassage/ToastMassage'
import axios from 'axios'

function AdminAPI(token) {
    const [isLogin, setIsLogin] = useState(false)
    const [admin, setadmin] = useState([])
    const [idadmin, setidadmin] = useState([])
    useEffect(() => {
        if (token) {
            const getAdmin = async() => {
                try {
                    const res = await axios.get('/admin/infor', {
                        headers: { Authorization: token }
                    })
                    setadmin(res.data)
                    setIsLogin(true)
                    setidadmin(res.data._id)
                } catch (err) {
                    toastError(err.response.data.msg)
                }
            }
            getAdmin()

        }
    }, [token])
    return {
        admin: [admin, setadmin],
        isLogin: [isLogin, setIsLogin],
        idadmin: [idadmin, setidadmin]
    }
}

export default AdminAPI