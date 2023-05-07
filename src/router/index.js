import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    category: {
        path: 'category',
        name: 'category',
        meta: { title: '表格' },
        component: () => import('../views/category.vue'),
    },
    user: {
        path: 'user',
        name: 'user',
        meta: { title: '用户管理' },
        component: () => import('../views/user.vue'),
    },
    commodity: {
        path: 'commodity',
        name: 'commodity',
        meta: { title: '商品管理' },
        component: () => import('../views/commodity.vue'),
    },
    order: {
        path: 'order',
        name: 'order',
        meta: { title: '订单管理' },
        component: () => import('../views/order.vue'),
    },
    infosettings: {
        path: 'infosettings',
        name: 'infosettings',
        meta: { title: '个人信息设置' },
        component: () => import('../views/info-settings.vue'),
    },
    password: {
        path: 'password',
        name: 'password',
        meta: { title: '修改密码' },
        component: () => import('../views/password.vue'),
    }
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
let originPush = Router.prototype.push
let originReplace = Router.prototype.replace
Router.prototype.push = function push(location){
    return originPush.call(this,location).catch(err=>err)
}
Router.prototype.replace = function push(location){
    return originReplace.call(this,location).catch(err=>err)
}
