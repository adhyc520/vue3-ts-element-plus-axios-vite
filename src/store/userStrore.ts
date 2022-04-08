import {defineStore} from "pinia";

export interface userInfo{
    userId: string;
    userName: string;
    token: string;
}


export const KEY_USER = "user";
export const userStrore = defineStore(KEY_USER,{
    state: ():userInfo => {
        return {
            userId:'1',
            userName: 'admin',
            token: 'token',
        }
    },
    getters: {
        getUserName: state => {
            return state.userName;
        },
        getToken: state => {
            return state.token;
        }
    },
    actions:{

    },


})
