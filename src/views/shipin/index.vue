<style scoped lang='stylus'>
.content {
    background: #eee;
    width: 100%;
    .box {
        background: #fff;
        width: 100%;
        padding: 10px;
        /*去掉padding区域的背景*/
        background-origin: content-box;
        background-clip: content-box;
        .header {
            padding: 12px;
            .touxiang {
                width: 30px;
                height: 30px;
                border-radius: 9999px;
                img {
                    width: 100%;
                }
            }
            .nickname {
                height: 30px;
                line-height: 30px;
                padding-left: 20px;
                font-size: 1.5rem;
            }
            .jubao {
                font-size: 1.2rem;
                color: #ccc;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 2px 3px;
                margin-top: 4px;
                margin-right: 10px;
            }
        }
        .title {
            font-size: 1.4rem;
            padding: 10px;
            line-height: 24px;
        }
        .main {
            video {
                width: 100%;
            }
        }
        .footer {
            padding: 8px 4px;
            font-size: 1.5rem;
            span {
                line-height: 20px;
                display: inline-block;
                float: left;
                margin-left: 5px;
            }
            i {
                float: left;
            }
            .like {
                margin-right: 30px;
                margin-left: 10px;
                i {
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: url(../../assets/26_03.png) 0 0 /100% 100% no-repeat;
                }
            }
            .dislike {
                i {
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: url(../../assets/26_05.png) 0 0 /100% 100% no-repeat;
                }
            }
            .recommend {
                margin-right: 10px;
                i {
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: url(../../assets/26_07.png) 0 0 /100% 100% no-repeat;
                }
            }
        }
    }
}

</style>
<template>
    <div v-height="50" style="overflow-y:scroll;"> 
        <div class="content">
            <div class="box" v-for="item in videoList">
                <div class="header ovh">
                    <div class="touxiang fl ovh">
                        <img src="http://image.uc.cn/s/uae/g/0q/avatar/38.png" alt="">
                    </div>
                    <div class="nickname fl">用户名</div>
                    <div class="jubao fr">举报</div>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="main">
                    <vui-video :item="item"></vui-video>
                </div>
                <div class="footer ovh">
                    <div class="like fl ovh">
                        <i></i>
                        <span>1111</span>
                    </div>
                    <div class="dislike fl ovh">
                        <i></i>
                        <span>2222</span>
                    </div>
                    <div class="recommend fr ovh">
                        <i></i>
                        <span>333</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import VuiVideo from "../../components/video.vue"
export default {
    data() {
        return {
			videoList:[{
				videoSrc:'http://files.blueairplus.com/iqiyi/《爱妆达人》第132期.mp4',
				title:'《爱妆达人》第132期',
				cur:'播放',
				id:'video1',
				volume:0.5
			},{
				videoSrc:'http://files.blueairplus.com/iqiyi/《爱妆达人》第132期.mp4',
				title:'《爱妆达人》第132期',
				cur:'播放',
				id:'video2',
				volume:0.9
			}]
        }
    },
    directives: {
        height: {
            inserted(el, binding) {
                $(el).height($(window).height() - binding.value)
            }
        }
    },
    components:{
    	VuiVideo
    }
}

</script>
