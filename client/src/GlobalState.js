import React, {createContext, useState,useEffect} from 'react'
import Menu1API from './api/menu1Api'
import Menu2API from './api/menu2Api'
import BannerAPI from './api/bannerApi'
import BannerBoyAPI from './api/bannerBoyApi'
import BannerGirlAPI from './api/bannerGirlApi'
import ProductBoyApi from './api/productBoyApi'
import ProductGirlApi from './api/productGirlApi'
import ProductGostoApi from './api/productGostoApi'
import ProductPkApi from './api/productPkApi'
import ProductBetraiApi from './api/productBetraiApi'
import ProductBegaiApi from './api/productBegaiApi'
import ProductDetailApi from './api/productDetailApi'
import PriceProductApimax from './api/getmaxPrice'
import axios from 'axios'
//gọi lại api ở file client/api chuyển thành dạng dữ liệu object state
export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 10 * 60 * 1000)
            }
            refreshToken()
        }
    },[])

    const state = {
        token:[token, setToken],
        menu1API:Menu1API(),
        menu2API:Menu2API(),
        bannerboyAPI:BannerBoyAPI(),
        bannergirlAPI:BannerGirlAPI(),
        bannerAPI:BannerAPI(),
        productboyApi: ProductBoyApi(),
        productgirlApi: ProductGirlApi(),
        productpkApi: ProductPkApi(),
        productgostoApi: ProductGostoApi(),
        productbetraiApi: ProductBetraiApi(),
        productbegaiApi: ProductBegaiApi(),
        productDetailApi : ProductDetailApi(),
        priceProduct_max:PriceProductApimax()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}