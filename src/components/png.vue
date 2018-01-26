<style scoped lang='stylus'>
	img{
		width: 100%;
	}
</style>
<template>
	<img v-lazy="child.wifi_img_url" alt="">
</template>
<script>
	export default{
		props:["child"]
	}
</script>