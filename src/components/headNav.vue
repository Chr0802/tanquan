<template>
	<div class="headNav">
		<el-row class="top-line" type="flex" justify='center'>
			<el-col :span='24'><div ></div></el-col>
		</el-row>
		<el-row class="nav container">
			<el-col :span='4'><div @click="goto('/')"><h1>LOGO</h1></div></el-col>
			<el-col :span="6">
				<ul>
					<li @click="goto('/tanquan')" :class="{current:isCurrent('/tanquan')}">探圈</li><!-- 
				 --><li @click="goto('/tanqiu')" :class="{current:isCurrent('/tanqiu')}">探求</li><!-- 
				 --><li @click="goto('/tanren')" :class="{current:isCurrent('/tanren')}">探人</li>
				</ul>
			</el-col>
			<el-col :span="4"><div style="height: 99px"></div></el-col>
			<el-col :span="10">
				<el-row class="search">
					<el-col :span="17">
						<input placeholder="搜索...">
						<i class="icon el-icon-search"></i>
					</el-col>
					<el-col :span="7" style="padding-top: 5px">
						<div class="btn" style="margin-right: 20px">登录</div>
				 		<div class="btn">注册</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		methods:{
			goto(path){
				this.$router.replace(path)
			},
			isCurrent(path){
				let rp=this.$route.path.split('/')
				return path=='/'+rp[1]
			}
		}
	}
</script>

<style scoped>
	.current{
		color:#4893a8;
	}
	.headNav{
		background-color: #29292c;
	}
	.top-line{
		background-color: #191919;
		width: 100%;
		height: 30px;
	}
	.nav{
		height: 99px;
		margin: 0 auto;
	}
	h1{
		font-size: 43px;
		color: #fff;
		line-height: 99px;
		margin: 0;
		font-weight: 200
	}
	ul{
		padding: 0;
		margin: 30px 0;
	}
	li{
		list-style: none;
		display: inline-block;
		width: 33.3%;
		text-align: center;
		line-height: 39px;
		font-size: 20px;
		color: #fff;
		cursor:pointer;
	}
	.btn{
		display: inline-block;
		width: 47px;
		height: 23px;
		border:solid 1.5px #c0c0c1;
		border-radius: 5px;
		color: #fff;
		text-align: center;
	}
	.search{
		margin-top: 35px;
	}
	input{
		height: 34px;
		width: 200px;
		background-color: #4f4f4f;
		padding-left: 20px;
		border: none;
		color: #fff
	}
	.icon{
		color: #fff;
		font-size: 18px;
		font-weight: 600;
		margin-left: 15px;
	}
</style>