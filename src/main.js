// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
// 引入路由插件
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch'
// 引入路由
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: 'assets/5-121204193R7-51 (1).gif',
    loading: '../static/123.gif',
    attempt: 1
})
// 安装路由
Vue.use(VueRouter);
// 安装插件
Vue.use(Vuex);
Vue.use(VueTouch, {
    name: 'v-touch'
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
/* eslint-disable no-new */

const routes = [{
    path: '/jingxuan',
    name: "精选",
    component() {
        return System.import("./views/jingxuan/index.vue")
    }
}, {
    path: '/shipin',
    name: "视频",
    component() {
        return System.import("./views/shipin/index.vue")
    }
}, {
    path: '/duanzi',
    name: "段子",
    component() {
        return System.import("./views/duanzi/index.vue")
    }
}, {
    path: '/faxian',
    name: "发现",
    component() {
        return System.import("./views/faxian/index.vue")
    }
}, {
    // 当用户瞎B输的时候 且没有定义在路由表里面的时候  就会跳转到 music 下面
    path: '*',
    redirect: '/jingxuan'
}]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
const store = new Vuex.Store({
    state: {
        count:0,
        siftshuju: [],
        videoshuju: [],
        pictureshuju: []
    },
    mutations: {
        GETSIFT(state, payload) {
            state.siftshuju = payload;
        }
    },
    actions: {
        async GETSIFT({commit}, payload) {
            $.ajax({
                type: "GET",
                url: "https://www.toutiao.com/api/pc/feed/?category=news_hot&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A1A57A153C91D6F&cp=5A5C316D065F8E1&_signature=M0RiyQAAaR79L-QbehXGeTNEYt",


                dataType: "jsonp",
                success: function (data) {

                    commit("GETSIFT", data.data)
                }
            });
    }
}
})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
