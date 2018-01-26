<style scoped lang='stylus'>
	.swiper-container {
	    .swiper-slide {
	        position: relative;
	        img {
	            width: 100%;
	        }
	        p {
	            position: absolute;
	            bottom: 0;
	            left: 0;
	            background: rgba(0, 0, 0, 0.6);
	            color: #fff;
	            width: 100%;
	            line-height: 36px;
	            height: 36px;
	            font-size: 1.6rem;
	        }
	    }
	    .swiper-pagination {
	        bottom: 0;
	    }
	}
</style>
<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperUrls">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
	import Swiper from "../../static/swiper.min.js"
	export default {
		props:["swiperUrls"],
	    data() {
	        return {

	        }
	    },
	    mounted() {
	        var mySwiper = new Swiper('.swiper-container', {
	            loop: true,
	            // 如果需要分页器
	            pagination: '.swiper-pagination',
	        })
	    }
	}
</script>
