<template>
	<div>
		<head-nav></head-nav>
		<div class="header">
			<div class="container">
				<p class="title">探圈 <span>Probing</span></p>
			</div>
		</div>
		<div class="nav">
			<el-row class="container">
				<ul>
					<li @click="goto('/tanquan/elite')" :class="{current:isCurrent('/tanquan/elite')}">圈子精英</li><!-- 
				 --><li @click="goto('/tanquan/library')" :class="{current:isCurrent('/tanquan/library')}">圈子库</li><!-- 
				 --><li @click="goto('/tanquan/me')" :class="{current:isCurrent('/tanquan/me')}">我的</li>
				</ul>
			</el-row>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
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
		},
		methods:{
			goto(path){
				this.$router.push(path)
			},
			isCurrent(path){
				return path==this.$route.path
			}
		}
	}
</script>

<style scoped>
 .header{
		width: 100%;
		height: 236px;
		background: no-repeat center url("../../static/keybroad.png") /auto 100% ;
	}
@media (min-width: 1346px){
 .header{
		width: 100%;
		height: 236px;
		background: no-repeat center url("../../static/keybroad.png") /100% auto ;
	}
}
.title{
	color: #fff;
	font-size: 42px;
	font-weight: 600;
	line-height: 230px;
}
.title span{
	font-size: 28px;
	font-weight: 400
}
.nav{
	height: 60px;
	background-color: #5b5b5b;
}
.nav ul{
	margin-left: 20px;
}
.nav li{
	padding: 0 20px;
	line-height: 60px;
	color: #fff;
	font-size: 18px;
	list-style: none;
	display: inline-block;
}
.current{
	background-color: #4893a8;
}
</style>