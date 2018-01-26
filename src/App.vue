<style scoped lang='stylus'>
header {
    background: #ffb000;
    ul {
        list-style: none;
        overflow: hidden;
        li {
            float: left;
            width: 25%;
            text-align: center;
            line-height: 50px;
            height: 50px;font-size: 2rem;
        }
        li.cur {
            color: #fff;
            background: red;
        }
    }
}

</style>
<template>
    <div id="app">
        <div>
            <header>
                <ul>
                    <!-- <li v-for="item in tabNav" @click="routerGo(item.url)" :class="{cur : $route.name == item.title}">{{item.title}}</li> -->
                    <v-touch tag="li"  v-for="item in tabNav" :key="item.id" @tap="routerGo(item.url)" :class="{cur : $route.name == item.title}">{{item.title}}</v-touch>
                </ul>
            </header>
        </div>
        <div class="por">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            tabNav: [{
                title: "精选",
                url: "/jingxuan"
            }, {
                title: "视频",
                url: "/shipin"
            }, {
                title: "段子",
                url: "/duanzi"
            }, {
                title: "发现",
                url: "/faxian"
            }]
        }
    },
    methods: {
        routerGo(url) {
            this.$router.push({ path: url })
        }
    }
}

</script>
