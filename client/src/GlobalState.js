import React, {createContext, useState} from 'react'
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
//import ProductsApi from './api/productsApi'
//gọi lại api ở file client/api chuyển thành dạng dữ liệu object state
export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)


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
        //productsApi:ProductsApi()
    }
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}