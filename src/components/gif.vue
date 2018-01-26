<style scoped lang='stylus'>
img {
    width: 100%;
}

.play {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 1.5rem;
    border-radius: 50%;
}

</style>
<template>
    <div class='por'>
        <img v-lazy="child.wifi_img_url" alt="">
        <!-- <div class="play" @click="play" v-show="isShowPlay">play</div> -->
        <v-touch tag="div" class="play" @tap="play" v-show="isShowPlay">play</v-touch>
    </div>
</template>
<script>
export default {
    props: ["child"],
    data() {
        return {
            isShowPlay: true
        }
    },
    methods: {
        play() {
            this.isShowPlay = false
            this.child.wifi_img_url = this.child.origin_img_url.origin_pic_url
        }
    }
}

</script>
