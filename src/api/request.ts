/**
 * 创建实例, 添加拦截
 */

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'


import {useRouter} from 'vue-router'
import {KEY_USER, userInfo} from "../store/userStrore";

const router = useRouter()

// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: import.meta.env.VITE_HTTP_TIMEOUT || 5000, // 请求超时时间
})

request.interceptors.request.use((config: AxiosRequestConfig) => {
    // config =config||{}
    const user = JSON.parse(localStorage.getItem(KEY_USER) || '{}') as userInfo
    if (user.token) {
        config.headers!['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
})

request.interceptors.response.use((response: AxiosResponse) => {
    const {code,msg} = response.data || {};
    if (code !== 200) {
        if (code === 401) {
            router.push('/login')
        }
        if (code === 403) {
            router.push('/403')
        }
        return Promise.reject(msg);
    }



    return Promise.resolve(response);
})


export default request
