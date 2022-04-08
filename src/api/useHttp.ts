
import request from "./request";
import {HttpConfig} from './type'



export const useHttp = <T>(config: HttpConfig): Promise<T> => {
    return new Promise<T>(((resolve, reject) => {
        request({
            url: config.url,
            method: config.method,
            data: config.data,
            params: config.params
        }).then((resp)=>{
            resolve(resp.data);
        }).catch((err) => {
            reject(err);
        })
    }))
}
