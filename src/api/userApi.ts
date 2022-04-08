import {useHttp} from './useHttp'
import {basciResponse,loginData} from "./type";


export const loginApi = (data:loginData) => {
    return useHttp<basciResponse<string>>({
        url:'/login',
        method:'post',
        data:data
    })
}
