import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: () => import('../layouts/MainLayout.vue'),
            redirect:'/test1',
            meta:{
                title:'首页',
                keepAlive:true
            },
            children: [
                {
                    name: 'T1',
                    path: '/test1',
                    component: () => import('../views/test1.vue'),
                    meta:{keepAlive:true,title:'测试1'}
                },
                {
                    name: 'T2',
                    path: '/test2',
                    component: () => import('../views/Test2.vue'),
                    meta: {
                        keepAlive: true
                    }
                }
            ]
        },
    ],
})



export default router
