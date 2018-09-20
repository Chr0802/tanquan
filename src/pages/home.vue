<template>
	<div class="home">
		<head-nav></head-nav>
		<div style="overflow: hidden;">
			<img src="../../static/bgg.png">
		</div>
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import headNav from '../components/headNav'
	import footBar from '../components/footBar'
	export default{
		components:{
			headNav,
			footBar
		}
	}
</script>

<style scoped>
	.home{
		background-color: #29292c;
	}
	img{
		width: 100%;
	}
</style>