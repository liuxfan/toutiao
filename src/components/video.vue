<style scoped lang='stylus'>
	video{
		width: 100%;
	}
	.kongzhiqi{
		span.play{
			display: block;
			width: 40px;height: 40px;text-align: center;line-height: 40px;
		}
		.currentTime{
			height: 2px;width: 200px;top: 19px;
			.dangqian_currentTime{
				height: 2px;
				background: red;display: block;
			}
			.duration{
				height: 2px;width: 200px;
				background: green;display: block;position: absolute;top: 0;left: 0;
			}
		}
		.volume{
			width: 55px;margin-top: 10px;
			input{
				width: 100%;
			}
		}
	}
</style>
<template>
	<div>
		<video :src="item.videoSrc" :id="item.id" @timeupdate="update"></video>
		<div class="kongzhiqi ovh">
			<span class="fl play" @click="play">{{item.cur}}</span>
			<p class="currentTime fl por">
				<span class="duration" @click="gotoTime(item,$event)">
					<span class="dangqian_currentTime" :style="{width:currentTime / duration * 100 + '%'}"></span>
				</span>
			</p>
			<p class="volume fl">
				<input type="range" min="0" max="1" step="0.1" v-model="item.volume" @change="changeVolume(item)">
			</p>
			<p>
				{{currentTime | zhuanhuan}} / {{ duration | zhuanhuan}}
			</p>
		</div> 
	</div>
</template>
<script>
	export default{
		props:["item"],
		data(){
			return{
				duration:0,
				currentTime:0
			}
		},
		filters:{
			zhuanhuan(s){
				var t;
		        if(s > -1){
		            // var hour = Math.floor(s/3600);
		            var min = Math.floor(s/60) % 60;
		            var sec = s % 60;
		            // if(hour < 10) {
		            //     t = '0'+ hour + ":";
		            // } else {
		            //     t = hour + ":";
		            // }

		            if(min < 10){t += "0";}
		            t = min + ":";
		            if(sec < 10){t += "0";}
		            t += ~~sec;
		        }
		        return t;
			}
		},
		methods:{
			play(){
				var vm = this;
				if(this.item.cur == '播放'){
					$("#" + this.item.id)[0].play()
					this.item.cur = '暂停'
					this.duration = $("#" + this.item.id)[0].duration
					// var timer = setInterval(function(){
					// 	vm.currentTime = $("#" + vm.item.id)[0].currentTime
					// 	console.log(vm.currentTime);
					// }, 1000);
					// console.log(this.duration);
					
				}else if(this.item.cur == '暂停'){
					$("#" + this.item.id)[0].pause()
					this.item.cur = '播放'
				}
			},
			update(){
				this.currentTime = $("#" + this.item.id)[0].currentTime
			},
			gotoTime(item,$event){
				var during = event.offsetX / 200
				$("#"+item.id)[0].currentTime = during * $("#" + this.item.id)[0].duration
			},
			changeVolume(item){
				$("#"+item.id)[0].volume = item.volume
			}
		}
	}
</script>