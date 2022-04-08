import {Method} from "axios";

export interface basciResponse<T> {
    code: number,
    msg: string,
    data: T
}

export interface HttpConfig {
    url: string,
    method: Method,
    data?: { [key: string]: any },
    params?: { [key: string]: any }
}

export interface loginData {
    userName: string,
    password: string,
    code: string
}
