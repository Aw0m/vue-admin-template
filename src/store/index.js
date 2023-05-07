import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                text: '个人中心',
                type: 'ios-paper',
                children: [
                    {
                        name: 'infosettings',
                        type: 'ios-grid',
                        size: 18, // icon大小
                        text: '个人信息设置',
                        // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                        // hidden: true,
                    },
                    {
                        name: 'password',
                        type: 'ios-grid',
                        size: 18, // icon大小
                        text: '修改密码',
                    }
                ],
            },
            {
                name: 'user', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'ios-egg-outline', // icon类型
                text: '用户管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name: 'commodity',
                size: 18, // icon大小
                type: 'ios-egg-outline', // icon类型
                text: '商品管理', // 点击侧边栏跳到一个单独的路由页面，需要提前在 router.js 定义
            },
            {
                name: 'category',
                size: 18,
                type: 'ios-grid',
                text: '商品分类管理',
                // hidden 属性 隐藏此菜单 可以通过在地址栏上输入对应的 URL 来显示页面
                // hidden: true,
            },
            {
                type: 'ios-grid',
                name: 'order',
                text: '订单管理',
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
